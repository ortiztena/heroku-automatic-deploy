import { Hotel } from "dals";

export const paginateHotelList = (
    hotelList: Hotel[],
    page: number,
    pageSize: number
): Hotel[] => {
    let paginatedHotelList = [...hotelList];
    if (page && pageSize) {
        const startIndex = (page - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, paginatedHotelList.length);
        paginatedHotelList = paginatedHotelList.slice(startIndex, endIndex);
    }

    return paginatedHotelList;
};
