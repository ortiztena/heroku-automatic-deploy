import { Router } from "express";
export const hotelsApi = Router();
import { mapHotelListFromModelToApi, mapHotelFromModelToApi, mapHotelFromApiToModel } from "./hotel.mappers";
import { hotelRepository } from 'dals';
import { paginateHotelList } from './hotel.helpers';
import { authorizationMiddleware } from 'pods/security';


hotelsApi
    .get("/", authorizationMiddleware(), async (req, res, next) => {
        try {

            const page = Number(req.query.page);
            const pageSize = Number(req.query.pageSize);
            const hotelList = await hotelRepository.getHotelList();
            const paginatedHotelList = paginateHotelList(hotelList, page, pageSize);
            res.send(mapHotelListFromModelToApi(paginatedHotelList))

        } catch (error) {
            next(error);

        }

    })
    .get('/:id', authorizationMiddleware(), async (req, res, next) => {
        try {
            const { id } = req.params;
            const hotel = await hotelRepository.getHotel(id)
            res.send(mapHotelFromModelToApi(hotel))
        } catch (error) {
            next(error);
        }
    })
    .put('/:id', authorizationMiddleware(), async (req, res, next) => {
        try {
            const { id } = req.params;
            const review = req.body
            await hotelRepository.updateReview(id, review);
            res.sendStatus(204)
        } catch (error) {
            next(error);
        }

    })
    .post('/', authorizationMiddleware(['admin']), async (req, res, next) => {
        try {
            const hotel = req.body;
            const newHotel = await hotelRepository.saveHotel(
                mapHotelFromApiToModel(hotel)
            );
            res.status(201).send(mapHotelFromModelToApi(newHotel));
        } catch (error) {
            next(error);
        }
    })
    .delete('/:id', authorizationMiddleware(['admin']), async (req, res, next) => {
        try {
            const { id } = req.params;
            await hotelRepository.deleteHotel(id);
            res.sendStatus(204);
        } catch (error) {
            next(error);
        }
    });

