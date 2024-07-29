"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "ทักษะ",
        id: "skills",
        content: (
            <ul className='list-disc pt-2'>
                <li>PHP</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRITP</li>
                <li>PYTHON</li>
                <li>SQL</li>
                <li>VB</li>
            </ul>
        ),
    },{
        title: "ตำแหน่งที่สนใจ",
        id: "department",
        content: (
            <ul className='list-disc pt-2'>
                <li>IT Support</li>
                <li>Full Stack Develop</li>
                <li>Front End Develop</li>
                <li>Back End Develop</li>
                <li>Data Administrator</li>
                <li>Programer</li>
            </ul>
        ),
    },{
        title: "ความสามารถทางภาษา",
        id: "language",
        content: (
            <ul className='list-disc pt-2'>
                <li>ไทย</li>
                <ul>
                    <li>ฟัง: ดีมาก</li>
                    <li>พูด: ดีมาก</li>
                    <li>อ่าน: ดีมาก</li>
                    <li>เขียน: ดีมาก</li>
                </ul>
                <li>อังกฤษ</li>
                <ul>
                    <li>ฟัง: พอใช้</li>
                    <li>พูด: พอใช้</li>
                    <li>อ่าน: ดี</li>
                    <li>เขียน: ดี</li>
                </ul>
            </ul>
        ),
    },{
        title: "ใบรับรอง",
        id: "certificate",
        content: (
            <ul className='list-disc pt-2'>
                <li>Google IT Support</li>
                <li>Google IT Automation with Python</li>
                <li>Google Data Analytics</li>
                <li>Google Digital Marketing & E-commerce</li>
            </ul>
        ),
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPanding, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16'>
                <Image src="/images/com_image.jpg" width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>เกี่ยวกับฉัน</h2>
                    <p className='text-base md:text-lg'>
                        ผมเป็นคนที่ชอบในด้านสายไอที ชอบเรียนรู้อะไรใหม่ๆ ผ่าน Tutorial ในเว็บบ้าง
                        ใน Youtube บ้าง เป็นคนชอบถามเรื่องทุกเรื่องที่สงสัย ว่าทำไมถึงทำแบบนั้นแบบนี้
                        และในตอนนี้กำลังมองหางานในด้านของงานไอที Web Develop Mobile Develop
                        และในด้านของ Full Stack
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}ทักษะ{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("department")}
                            active={tab === "department"}
                        >
                            {" "}ตำแหน่งที่สนใจ{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("language")}
                            active={tab === "language"}
                        >
                            {" "}ความสามารถทางภาษา{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certificate")}
                            active={tab === "certificate"}
                        >
                            {" "}ใบรับรอง{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection