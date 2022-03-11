interface Options {
    args: string[];
    headless: boolean;
    defaultViewport:null;
}

export async function getOptions() {

    let options: Options;

    options = {
        args: [],
        headless: true,
        defaultViewport: null
    };

    return options;

}