import {inject, injectable} from "inversify";
import {ILogger} from "../../Logger/interface/ILogger";
import {ICarOnSaleClient} from "../interface/ICarOnSaleClient";
import {DependencyIdentifier} from "../../../DependencyIdentifiers";
import "reflect-metadata";

@injectable()
export class CarOnSaleClient implements ICarOnSaleClient {

    public constructor(@inject(DependencyIdentifier.LOGGER) private logger: ILogger) {
    }


    public async getRunningAuctions(): Promise<void /* TODO: Introduce a type */> {

    }

}
