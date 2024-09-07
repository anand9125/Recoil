import { selector } from "recoil";
import { countAtom } from "../store/atom/count";
 export const evenSelectors = selector({
    key:"evenSelector",
    get :(props) =>{
        const count= props.get(countAtom);
        return count%2;
    }
 });

