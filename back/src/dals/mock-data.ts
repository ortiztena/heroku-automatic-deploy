import { Hotel } from './hotel';
import { User } from './user';
import { ObjectId } from 'mongodb';

interface DB {
    users: User[];
    hotels: Hotel[];
}

export const db: DB = {
    users: [
        {
            _id: new ObjectId(),
            email: 'admin@email.com',
            password: 'test',
            salt: '',
            role: 'admin',
            avatar: 'admin-avatar.png',
        },
        {
            _id: new ObjectId(),
            email: 'user@email.com',
            password: 'test',
            salt: '',
            role: 'standard-user',
            avatar: 'user-avatar.png',
        },
    ],
    hotels: [
        {
            _id: "10006546",
            name: "Ribeira Charming Duplex",
            summary:
                "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character.",
            bedrooms: 3,
            beds: 5,
            bathrooms: 1,
            images: {
                picture_url:
                    "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
            },
            address: {
                street: "Porto, Porto, Portugal",
                market: "Porto",
                country: "Portugal",
            },
            reviews: [
                {
                    _id: "58663741",
                    date: new Date(),
                    reviewer_name: "Cátia",
                    comments:
                        "A casa da Ana e do Gonçalo foram o local escolhido para a passagem de ano com um grupo de amigos. Fomos super bem recebidos com uma grande simpatia e predisposição a ajudar com qualquer coisa que fosse necessário.\r\nA casa era ainda melhor do que parecia nas fotos, totalmente equipada, com mantas, aquecedor e tudo o que pudessemos precisar.\r\nA localização não podia ser melhor! Não há melhor do que acordar de manhã e ao virar da esquina estar a ribeira do Porto.",
                },
                {

                    _id: "62413197",
                    date: new Date(),
                    reviewer_name: "Théo",
                    comments:
                        "We are french's students, we traveled some days in Porto, this space was good and we can cooking easly. It was rainning so we eard every time the water fall to the ground in the street when we sleeping. But It was cool and or was well received by Ana et Gonçalo",
                },
            ],
        },
        {
            _id: "10009999",
            name: "Horto flat with small garden",
            summary:
                "One bedroom sofa-bed in quiet and bucolic neighbourhood right next to the Botanical Garden. Small garden, outside shower, well equipped kitchen and bathroom with shower and tub. Easy for transport with many restaurants and basic facilities in the area.",
            bedrooms: 1,
            beds: 2,
            bathrooms: 1,
            images: {
                picture_url:
                    "https://a0.muscache.com/im/pictures/5b408b9e-45da-4808-be65-4edc1f29c453.jpg?aki_policy=large",
            },
            address: {
                street: "Rio de Janeiro, Rio de Janeiro, Brazil",
                market: "Rio De Janeiro",
                country: "Brazil",
            },
            reviews: [],
        },
        {
            _id: "1001265",
            name: "Ocean View Waikiki Marina w/prkg",
            summary:
                "A short distance from Honolulu's billion dollar mall, and the same distance to Waikiki. Parking included. A great location that work perfectly for business, education, or simple visit. Experience Yacht Harbor views and 5 Star Hilton Hawaiian Village.",
            bedrooms: 1,
            beds: 1,
            bathrooms: 1,
            images: {
                picture_url:
                    "https://a0.muscache.com/im/pictures/15037101/5aff14a7_original.jpg?aki_policy=large",
            },
            address: {
                street: "Honolulu, HI, United States",
                market: "Oahu",
                country: "United States",
            },
            reviews: [
                {
                    _id: "4765259",
                    date: new Date(),
                    reviewer_name: "Jacqui",
                    comments:
                        "Our stay was excellent.  The place had a breath taking view.  David was very accommodating with our hotel stay, parking availability and all of our concerns & questions.  He did above and beyond what anyone would want.  He's a man of his word and very professional.  We highly recommend for everyone to stay in all of the places he recommended.  Thank you David for a accommodating our wonderful and memorable stay in Honolulu, Hawaii.  God Bless!  Henry & Jacqui (SF, CA)",
                },
                {
                    _id: "4908312",
                    date: new Date(),
                    reviewer_name: "Khoren",
                    comments: "Tell others in the Airbnb community about your stay.",
                },
            ],
        },
    ],
}