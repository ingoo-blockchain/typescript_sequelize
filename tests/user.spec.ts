import 'mocha';
import { assert } from 'chai';
import UserRepository from '../src/models/user.model';
import { getAllUser, addUser } from '../src/user/user.service';

describe('User Service', () => {
    it('get Users', async () => {
        const users = await getAllUser();
        assert(typeof users, 'objects');
    });
});
