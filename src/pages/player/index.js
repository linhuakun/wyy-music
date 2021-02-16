import React, { memo } from 'react'
import {PlayerWrapper,PlayerLeft,PlayerRight} from './style'

export default memo(function HYPlayer() {
    return (
        <PlayerWrapper>
            <div className="content wrap-v2">
                <PlayerLeft>
                    <h2>HYPlayerInfo</h2>
                    <h2>HYSongContent</h2>
                </PlayerLeft>
                <PlayerRight>
                    <h2>HYSongSimiPlayList</h2>
                    <h2>HYSimiSongs</h2>
                </PlayerRight>
            </div>
        </PlayerWrapper>
    )
})
