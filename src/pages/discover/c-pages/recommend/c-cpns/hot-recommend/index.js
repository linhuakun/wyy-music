import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector,shallowEqual} from 'react-redux'


import HYThemeHeaderRCM from '@/components/theme-header-rcm'

import HYsongsCover from '@/components/song-covor'

import {
    HotRecommendWrapper 
} from './style'
import { getHotRecommendAction } from '../../store/actionCreators'
import {HOT_RECOMMEND_LIMIT} from '@/common/constants'

export default memo(function HYHotRecommend() {

    //state

    //redux hooks

    //拿取数据
    const {hotRecommends} =useSelector(state=>({
        hotRecommends:state.getIn(["recommend","hotRecommends"])
    }),shallowEqual);

    //发送请求
    const dispatch = useDispatch(); 
    
    useEffect(()=>{
        dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
    },[dispatch]);

    //other hooks


    return (
        <HotRecommendWrapper> 
            <HYThemeHeaderRCM title="热门推荐" keyword={["华语","流行","民谣","摇滚","电子"]}/>
            <div className="recommend-list">
                {
                    hotRecommends.map((item,index)=>{
                        return <HYsongsCover key={item.id} info={item}></HYsongsCover>
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})
