import vanillaPuppeteer, { Page } from "puppeteer";
import { Cluster } from "puppeteer-cluster";
import { addExtra } from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { getOptions } from "./options";
import colors from "colors"

(async () => {

    try {

        const cluster = await Cluster.launch({
            puppeteer: vanillaPuppeteer,
            puppeteerOptions: await getOptions() as any,
            maxConcurrency: 2,
            concurrency: Cluster.CONCURRENCY_CONTEXT
        });

        cluster.queue(async ({ page }:any) => {
        });
        
        await cluster.idle();
        await cluster.close();
        
    } catch (error) {
        
        console.log(`[!] An error occurred while executing the bot: ${error}`);
        
    }

})();