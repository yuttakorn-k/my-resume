"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumders = dynamic(() => { return import("react-animated-numbers") }, { ssr: false })

const achievementsList = [
    {
        metric: "Project",
        value: "10",
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Users",
        value: "5,000",
    },
    {
        metric: "Awards",
        value: "5",
    },
    {
        metric: "Years",
        value: "5",
    },
]

const AchievementSection = () => {
    return (
        <div className='py-8 px-4 xl:gab-16 sm:py-16 xl:px-16'>
            <div className='border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between'>
                {achievementsList.map((achievement, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center justify-center mx-4'>
                            <h2 className='text-white text-4xl font-bold flex flex-row'>
                                {achievement.prefix}
                                <AnimatedNumders
                                    includeComma
                                    animateToNumber={parseInt(achievement.value)}
                                    locale='en-US'
                                    className='text-white text-4xl font-bold'
                                    configs={(_, index) => {
                                        return {
                                            mass: 1,
                                            friction: 100,
                                            tenstions: 140 * (index + 1),
                                        }
                                    }}
                                />
                                {achievement.postfix}
                            </h2>
                            <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AchievementSection