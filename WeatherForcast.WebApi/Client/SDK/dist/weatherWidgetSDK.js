var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
const API_URL = 'http://localhost:28469/weather';
export default ({ context, onComplete, onError }) => {
    return {
        calculate: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const res = yield axios.get(`${API_URL}?latitude=${context.lat}&longitude=${context.lan}`);
                onComplete({
                    country: res.data.country,
                    city: res.data.city,
                    temperature: res.data.temperature,
                });
            }
            catch (err) {
                onError(err.message);
            }
        }),
    };
};
