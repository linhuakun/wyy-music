import {Map} from 'immutable';

import * as actionTypes from './constants';

const defaultState=Map({
    playList:[
            {
                "name": "雅俗共赏",
                "id": 411214279,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 5771,
                        "name": "许嵩",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": null,
                "fee": 8,
                "v": 31,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 34749138,
                    "name": "青年晚报",
                    "picUrl": "https://p2.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg",
                    "tns": [],
                    "pic": 3431575794705764
                },
                "dt": 249621,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 9987177,
                    "vd": -22200
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 5992323,
                    "vd": -19600
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 3994896,
                    "vd": -17800
                },
                "a": null,
                "cd": "1",
                "no": 2,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 8192,
                "originCoverType": 1,
                "originSongSimpleData": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mv": 5302271,
                "rtype": 0,
                "rurl": null,
                "mst": 9,
                "cp": 14026,
                "publishTime": 1461723397683
            },
            {
                "name": "你的轮廓",
                "id": 1813864802,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 35187624,
                        "name": "叶琼琳",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [
                    "我穿过所有浪漫银河"
                ],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 4,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 121957769,
                    "name": "你的轮廓",
                    "picUrl": "https://p1.music.126.net/-u92GsfIvtgTXCRapqQZeQ==/109951165647093663.jpg",
                    "tns": [],
                    "pic_str": "109951165647093663",
                    "pic": 109951165647093660
                },
                "dt": 237225,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 9491897,
                    "vd": -29957
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 5695155,
                    "vd": -27371
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 3796785,
                    "vd": -25657
                },
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 8192,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "mst": 9,
                "cp": 2708406,
                "publishTime": 0
            }
],
    currentSongIndex:0,
    currentSong:{},
    sequence:0,//0:循环 1:随机 2:单曲
    lyricList:[],
    currentLyricIndex:0,
})

function reducer(state=defaultState,action){
    switch(action.type){
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong",action.currentSong);
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set("playList",action.playList);
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex",action.index);
        case actionTypes.CHANGE_SEQUENCE:
            return state.set("sequence",action.sequence);
        case actionTypes.CHANGE_LYRIC_LIST:
            return state.set("lyricList",action.lyricList);
        case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
            return state.set("currentLyricIndex",action.index);
        default:
            return state
    }
}

export default reducer;