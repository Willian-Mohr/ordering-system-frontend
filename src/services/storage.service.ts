import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../config/storage_keys.config";
import { Cart } from "../models/cart";
import { LocalUser } from "../models/local_user";

@Injectable()
export class StorageService {

    getLocalUser(): LocalUser {
        let user = localStorage.getItem(STORAGE_KEYS.localUser);
        return user == null ? null : JSON.parse(user);
    }

    setLocalUser(obj: LocalUser) {
        obj == null ? localStorage.removeItem(STORAGE_KEYS.localUser) : localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
    }

    getCart(): Cart {
        let user = localStorage.getItem(STORAGE_KEYS.cart);
        return user == null ? null : JSON.parse(user);
    }

    setCart(obj: Cart) {
        obj == null ? localStorage.removeItem(STORAGE_KEYS.cart) : localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(obj));
    }
}