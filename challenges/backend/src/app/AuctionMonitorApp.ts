import {inject, injectable} from "inversify";
import {ICarOnSaleClient} from "./services/CarOnSaleClient/interface/ICarOnSaleClient";
import {ILogger} from "./services/Logger/interface/ILogger";
import {DependencyIdentifier} from "./DependencyIdentifiers";
import "reflect-metadata";

@injectable()
export class AuctionMonitorApp {

    public constructor(
        @inject(DependencyIdentifier.LOGGER) private logger: ILogger,
        @inject(DependencyIdentifier.CLIENT) private client: ICarOnSaleClient,
    ) { }

    public async start(): Promise<void> {

        this.logger.log(`Auction Monitor started.`);

        // TODO: Retrieve auctions and display aggregated information (see README.md)

    }

}
