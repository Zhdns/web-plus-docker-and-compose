import { Offers } from './offers.model';
import { UserService } from 'src/user/user.service';
import { WishService } from 'src/wishes/wish.service';
import { CreateOfferDto } from './offersDto/createOffer.dto';
export declare class OffersService {
    private offersRepasitory;
    private userService;
    private wishesService;
    constructor(offersRepasitory: typeof Offers, userService: UserService, wishesService: WishService);
    createOffer(dto: CreateOfferDto, userId: number, itemId: number): Promise<Offers>;
    getAllOffers(): Promise<Offers[]>;
    getOfferByPK(id: number): Promise<Offers>;
}
