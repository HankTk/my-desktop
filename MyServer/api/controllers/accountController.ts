import * as mongoose from 'mongoose';
import {AccountSchema} from '../models/accountModel';
import {Request, Response} from 'express';

const Account = mongoose.model('Account', AccountSchema);

/**
 * AccountController
 *
 */
export class AccountController {

    /**
     * addNewAccount
     *
     * @param req
     * @param res
     */
    public addNewAccount(req: Request, res: Response) {
        const newAccount = new Account(req.body);

        newAccount.save((err, account) => {
            if (err) {
                res.send(err);
            }
            res.json(account);
        });
    }

    /**
     * getAccounts
     *
     * @param req
     * @param res
     */
    public getAccounts(req: Request, res: Response) {
        Account.find({}, (err, account) => {
            if (err) {
                res.send(err);
            }
            res.json(account);
        });
    }

    /**
     * getAccountWithId
     *
     * @param req
     * @param res
     */
    public getAccountWithId(req: Request, res: Response) {
        Account.findById(req.params.accountId, (err, account) => {
            if (err) {
                res.send(err);
            }
            res.json(account);
        });
    }

    /**
     * updateAccount
     *
     * @param req
     * @param res
     */
    public updateAccount(req: Request, res: Response) {
        Account.findOneAndUpdate({_id: req.params.accountId}, req.body, {new: true}, (err, account) => {
            if (err) {
                res.send(err);
            }
            res.json(account);
        });
    }

    /**
     * deleteAccount
     *
     * @param req
     * @param res
     */
    public deleteAccount(req: Request, res: Response) {
        Account.findOneAndDelete({_id: req.params.accountId}, (err, account) => {
            if (err) {
                res.send(err);
            }
            res.json({message: 'Successfully deleted account!'});
        });
    }

}
