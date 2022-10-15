import {ClientConfig} from "pg";
import Publisher from "./src/publisher";

const CONNECTION_CONFIG: ClientConfig = {
	user: "root",
	host: "localhost",
	database: "job_scheduler",
	port: 5432,
};

const main = async () => {
	const pub = new Publisher("test", CONNECTION_CONFIG, {});

	console.time("pub");
	for (let i = 0; i <= 10 ** 5; i++) {
		await pub.pub({num: Math.random()});
		if (i % 1000 === 0) console.timeLog("pub", i);
	}
	console.timeEnd("pub");
	process.exit();
};

main();
