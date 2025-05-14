import {Request, Response, NextFunction} from 'express';
import {AccountController} from '../controllers/accountController';

/**
 * AccountRoutes
 *
 */
export class AccountRoutes {

    api_root = '/api';

    public AccountController: AccountController = new AccountController();

    /**
     * routes
     *
     * @param app
     */
    public routes(app): void {

        /**
         * Get Root
         */
        app.route(this.api_root + '/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                });
            });

        /**
         * Get, Account
         */
        app.route(this.api_root + '/accounts')

            // GET: with middleware
            /*
            .get((req: Request, res: Response, next: NextFunction) => {
                // middleware
                console.log(`Request from: ${req.originalUrl}`);
                console.log(`Request type: ${req.method}`);

                if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
                    res.status(401).send('You shall not pass!');
                } else {
                    next();
                }
            }, this.AccountController.getAccounts)
            */

            // GET:
            .get(this.AccountController.getAccounts)

            // POST:
            .post(this.AccountController.addNewAccount);

        /**
         * Account By Id
         */
        app.route(this.api_root + '/accounts/:accountId')

            // GET:
            .get(this.AccountController.getAccountWithId)

            // PUT:
            .put(this.AccountController.updateAccount)

            // DELETE:
            .delete(this.AccountController.deleteAccount);

    }
}
