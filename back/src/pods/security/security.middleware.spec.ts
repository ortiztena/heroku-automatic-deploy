import { UserSession } from "common-app/models";
import { verifyJWT } from 'common/helpers';
import { Response, Request } from "express";
import { authenticationMiddleware } from './security.middlewares';
import * as helpers from 'common/helpers/jwt.helpers';

describe('pods/security/security.middlewares specs', () => {
    describe('authenticationMiddleware specs', () => {
        it('should return 401 when it feeds authorization cookie equals undefined', async () => {
            // Arrange
            const authorization = undefined;
            const verifyJWTStub = jest
                .spyOn(helpers, 'verifyJWT')
                .mockRejectedValue('Not valid token');

            const req = { cookies: { authorization } } as Request;
            const res = {
                sendStatus: jest.fn() as any,
            } as Response;
            const next = jest.fn()
            // Act
            await authenticationMiddleware(req, res, next);
            // Assert
            expect(res.sendStatus).toHaveBeenCalled();
            expect(res.sendStatus).toHaveBeenCalledWith(401);
            expect(verifyJWTStub).toHaveBeenCalled();
        });
        it('should call next function and assign userSession if it feeds authorization with token', async () => {
            // Arrange
            const authorization = 'Bearer my-token';
            const userSession: UserSession = {
                id: '1',
                role: 'admin',
            };
            const verifyJWTStub = jest
                .spyOn(helpers, 'verifyJWT')
                .mockResolvedValue(userSession);


            const req = { cookies: { authorization } } as Request;

            const res = {
                sendStatus: jest.fn() as any,
            } as Response;
            const next = jest.fn()
            // Act
            await authenticationMiddleware(req, res, next);
            // Assert
            expect(helpers.verifyJWT).toHaveBeenCalled();
            expect(next).toHaveBeenCalled();
            expect(req.userSession).toEqual(userSession);
        });
    });
});

