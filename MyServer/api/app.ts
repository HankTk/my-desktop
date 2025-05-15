import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import {AccountRoutes} from './routes/accountRoutes';
import * as SocketIO from 'socket.io';
import * as cors from 'cors';

class App {

    public app: express.Application = express();
    public accountRoutes: AccountRoutes = new AccountRoutes();

    // DB Connection String
    public mongoUrl = 'mongodb://localhost/MyAccount';

    private io: SocketIO.Server;

    constructor() {
        this.config();
        this.mongoSetup();
        this.accountRoutes.routes(this.app);
    }

    private config(): void {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));

        // serving static files
        /*
        this.app.use(express.static('public'));
        */
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, {useNewUrlParser: true});
    }

}

export default new App().app;
