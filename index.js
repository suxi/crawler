"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const got_1 = __importDefault(require("got"));
const async_1 = __importDefault(require("async"));
let key = process.argv[2];
let patt = new RegExp(`<a[^<]*href="([^<"]*)"[^<]*(${key}[^<]*)`, 'ig');
let links = Array();
let q = async_1.default.queue((page, callback) => __awaiter(this, void 0, void 0, function* () {
    try {
        const response = yield got_1.default(`http://n2.lufi99.org/pw/thread.php?fid=22&page=${page}`, { timeout: 180 * 1000 });
        // console.log(response.body)
        let match = patt.exec(response.body);
        while (match != null) {
            if (links.indexOf(match[1]) >= 0) {
                match = patt.exec(response.body);
                continue;
            }
            links.push(match[1]);
            console.log(`page ${page}: yes http://n2.lufi99.org/pw/${match[1]} ${match[2]}`);
            match = patt.exec(response.body);
        }
    }
    catch (error) {
        console.log(`page ${page}: ${error.code}`);
        // console.log(error.response.body); 
        //=> 'Internal server error ...'
    }
    callback();
}), 2);
(() => __awaiter(this, void 0, void 0, function* () {
    for (let index = 1; index < 700; index++) {
        q.push(index);
    }
}))();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXNCO0FBQ3RCLGtEQUF5QjtBQUd6QixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLCtCQUErQixHQUFHLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQztBQUN2RSxJQUFJLEtBQUssR0FBRyxLQUFLLEVBQVUsQ0FBQTtBQUUzQixJQUFJLENBQUMsR0FBRyxlQUFLLENBQUMsS0FBSyxDQUFDLENBQU8sSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFO0lBQ3pDLElBQUk7UUFDQSxNQUFNLFFBQVEsR0FBRyxNQUFNLGFBQUcsQ0FBQyxrREFBa0QsSUFBSSxFQUFFLEVBQ3ZGLEVBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ25CLDZCQUE2QjtRQUM3QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNwQyxPQUFPLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDbEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDOUIsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNoQyxTQUFRO2FBQ1g7WUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLGlDQUFpQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNoRixLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDbkM7S0FFSjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUMxQyxxQ0FBcUM7UUFDckMsZ0NBQWdDO0tBQ25DO0lBQ0QsUUFBUSxFQUFFLENBQUM7QUFDZixDQUFDLENBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVOLENBQUMsR0FBUyxFQUFFO0lBQ1IsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUN0QyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ2hCO0FBRUwsQ0FBQyxDQUFBLENBQUMsRUFBRSxDQUFDIn0=