import React from 'react';
import WindowSize from '../../components/WindowSize'

const WindowSizerPage = () => {
        return (
            <div>
                <WindowSize>
                    {(state) => {
                        const{width, heigth} = state;
                        return (
                            <div>
                                <p>
                                    Current width: {width} px
                                    Current heigth: {heigth} px
                                </p>
                            </div>
                        )
                    }}
                </WindowSize>
            </div>
        );
}

export default WindowSizerPage;
