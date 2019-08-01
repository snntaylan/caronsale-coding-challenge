import {Container} from "inversify";
import { equal } from "assert";
import "./CarOnSaleClient";

import {ILogger} from "../../Logger/interface/ILogger";
import {Logger} from "../../Logger/classes/Logger";
import {DependencyIdentifier} from "../../../DependencyIdentifiers";
import { CarOnSaleClient } from "./CarOnSaleClient";

describe("CarOnSaleClient test", () => {
    const container = new Container({
        defaultScope: "Singleton",
    });

    container.bind<ILogger>(DependencyIdentifier.LOGGER).to(Logger);

    const client = container.resolve(CarOnSaleClient);

    it("should return expected string", async () => {
        const result = await client.getRunningAuctions();
        equal(result, {});
    });
});
