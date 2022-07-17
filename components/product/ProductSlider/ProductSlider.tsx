import React from "react";
import { FC, Children, isValidElement, useState  } from "react"
import s from "./ProductSlider.module.css"
import { useKeenSlider } from "keen-slider/react"
import classNames from "classnames";


type Props = {
    children?: React.ReactNode
};

const ProductSlider: FC<Props> = ({children}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        loop: true,
        slideChanged(s) {
            setCurrentSlide(s.track.details.rel)
        },
        created() {
          setLoaded(true)
        },
    })
    
    return (
        <div className={s.root}>
            <div ref={sliderRef} className="keen-slider w-full h-full transition-opacity">
                {loaded && instanceRef.current && ( 
                    <>
                        <button 
                            className={classNames(s.leftControl, s.control)} 
                            title="previous slide" 
                            onClick={(e) => {
                                instanceRef.current?.prev()
                            }}
                        />
                    </>
                )}
                {loaded && instanceRef.current && ( 
                    <>
                        <button 
                            className={classNames(s.rightControl, s.control)} 
                            title="next slide" 
                            onClick={(e) => {
                                instanceRef.current?.next()
                            }}
                        />
                    </>
                )}

                { Children.map(children, (child) => {
                
                if (isValidElement(child)) {
                    return React.cloneElement(child, {
                        className: `${
                            child.props.className ? `${child.props.className}` : ""
                        } keen-slider__slide`
                    })
                }

                return child
            }
            )}
            </div>
        </div>
    )
}

export default ProductSlider