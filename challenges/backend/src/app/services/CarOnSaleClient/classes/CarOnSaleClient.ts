import {inject, injectable} from "inversify";
import {ILogger} from "../../Logger/interface/ILogger";
import {ICarOnSaleClient} from "../interface/ICarOnSaleClient";
import {DependencyIdentifier} from "../../../DependencyIdentifiers";
import "reflect-metadata";
import {createHash} from "crypto";

@injectable()
export class CarOnSaleClient implements ICarOnSaleClient {

    public constructor(@inject(DependencyIdentifier.LOGGER) private logger: ILogger) {
    }

    private hashPasswordWithCycles(plainTextPassword: string, cycles: number): string {
        let hash = `${plainTextPassword}`;

        for(let i = 0; i < cycles; i++) {
            const sha512 = createHash("sha512");
            sha512.update(hash);
            hash = sha512.digest("hex");
        }

        return hash;
    }

    public async getRunningAuctions(): Promise<void /* TODO: Introduce a type */> {

    }

}
