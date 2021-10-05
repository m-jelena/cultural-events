import { randomBytes } from "crypto";

export class Token {

   static randomTokenString() {
        return randomBytes(40).toString('hex');
   }
}