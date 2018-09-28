import 'egg';
import { jwt } from 'egg-jwt';

declare module 'egg' {
    interface Application {
        jwt;
    }
}