/**
 * AccountModel
 */
'use strict';

import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const AccountSchema = new Schema({
    name: {
        type: String,
        Required: 'Enter the name of the account'
    },
    username: {
        type: String,
        Required: 'Enter the username of the account'
    },
    password: {
        type: String,
        Required: 'Enter the password of the account'
    },
    description: {
        type: String
    },
    url: {
        type: String
    },
    status: {
        type: [{
            type: String,
            enum: ['active', 'disabled', 'closed']
        }],
        default: ['active']
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
