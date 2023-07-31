import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    sepet: {
        urunler: [],
        fiyat: 0
    }
}

const SepetSlice = createSlice({
    name: "sepet",
    initialState,
    reducers: {
        sepete_ekle: (state, actions) => {
            var index = state.sepet.urunler.length;
            var isExist = false;
            state.sepet.urunler.forEach((urun) => {
                if (urun.title === actions.payload.title) {
                    isExist = true;
                }
            })

            if (isExist) {
                state.sepet.urunler.forEach((urun, index) => {
                    if (urun.title === actions.payload.title) {
                        state.sepet.urunler[index].urunAdedi += 1;
                    }
                })
            }
            else {
                state.sepet.urunler = [...state.sepet.urunler, actions.payload];
                Object.assign(state.sepet.urunler[index], { urunAdedi: 1 })
            }
            state.sepet.fiyat += actions.payload.price;
        },
        sepetten_cıkar: (state, actions) => {
            var silinecek_index = 0;
            state.sepet.urunler.forEach((element, index) => {
                if (element.title === actions.payload.title) {
                    silinecek_index = index
                }
            })
            if (state.sepet.urunler[silinecek_index].urunAdedi > 1) {
                state.sepet.urunler[silinecek_index].urunAdedi -= 1;
            }
            else {
                state.sepet.urunler.splice(silinecek_index, 1);
            }
            state.sepet.fiyat -= actions.payload.price;
        },
        sepeti_bosalt: (state) => {
            state.sepet.urunler = [];
            state.sepet.fiyat = 0;
        }
    }
})
export default SepetSlice.reducer;
export const { sepete_ekle, sepetten_cıkar, sepeti_bosalt } = SepetSlice.actions;