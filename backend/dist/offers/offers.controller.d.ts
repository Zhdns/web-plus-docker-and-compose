import { OffersService } from './offers.service';
import { CreateOfferDto } from './offersDto/createOffer.dto';
export declare class OffersController {
    private offerService;
    constructor(offerService: OffersService);
    create(offersDto: CreateOfferDto, req: any): Promise<import("./offers.model").Offers>;
}
