"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className='lg:py-16' id="home">
            <div className='grid gird-cols-1 sm:grid-cols-12'>
                <motion.div initial={{ opacity:0, scale:0.5 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.5 }} className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#2c2c2c]">
                            สวัสดีครับผม {" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'ยุทธกรณ์',
                                1000,
                                'IT Support',
                                1000,
                                'Web Developer',
                                1000,
                                'Programer',
                                1000,
                                'Back End Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={70}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-lg mb-6 lg:text-xl'>
                        สวัสดีครับ ผมกำลังมองหางานทางด้านไอที โปรแกรมเมอร์ Web develop <br></br>
                        ความมุ่งหวังในสายงานคืออยากไปให้ไกลที่สุด สามารถเขียนได้หลายภาษา
                        และสามารถสร้างเว็บเป็นของตัวเองได้โดยที่ไม่ต้องดู Tutorial
                    </p>
                    <div>
                        <a href='/#contact' className='px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-primary via-[#072B73] to-[#0B47BF] hover:bg-slate-200 text-white'>Hire Me</a>
                        <button className='px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-[#011111] to-blue-500 hover:bg-slate-800 text-white  mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                        </button>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity:0, scale:0.5 }} animate={{ opacity:1, scale:1 }} className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image src="/images/resume_image.jpg" width={300} height={300}
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ' />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection