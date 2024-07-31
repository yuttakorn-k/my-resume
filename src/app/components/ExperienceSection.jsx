"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "ปี 2565",
        id: "y2565",
        content: (
            <ul className='list-disc pt-2'>
                <li>GFPT Nichirei (Thailand) Co., Ltd.</li>
                <ul>
                    <li>ที่ตั้ง: 77 ม.4 ต.ห้างสูง อ.หนองใหญ่ ตำบล ห้างสูง อำเภอหนองใหญ่ ชลบุรี 20190</li>
                    <li>ระยะเวลา: มิถุนายน 2565 - กรกฏาคม 2565</li>
                    <li>ตำแหน่งงาน: CCTV Technician</li>
                    <li>ระดับ: เจ้าหน้าที่</li>
                    <li>รายละเอียดงาน: ดูแลแก้ไขปัญหาเกี่ยวกับระบบ CCTV และ Monitor CCTV</li>
                </ul>
                <li>Aimagin Co., Ltd.</li>
                <ul>
                    <li>ที่ตั้ง: 555/387 ม.5 ต.บางเมือง อ.เมือง จ.สมุทรปราการ 10270</li>
                    <li>ระยะเวลา: สิงหาคม 2565 - ตุลาคม 2565</li>
                    <li>ตำแหน่งงาน: IT Support / Helpdesk</li>
                    <li>ระดับ: เจ้าหน้าที่</li>
                    <li>รายละเอียดงาน: ซัพพอร์ตโปรเจค ประสานงานลูกค้าและทีมงาน จัดอบรมและสรุปการอบรม</li>
                </ul>
            </ul>
        ),
    },{
        title: "ปี 2566",
        id: "y2566",
        content: (
            <ul className='list-disc pt-2'>
                <li>Siam Kito Co., Ltd.</li>
                <ul>
                    <li>ที่ตั้ง: 205 ต.คลองตำหรุ อ.เมือง จ.ชลบุรี 20000</li>
                    <li>ระยะเวลา: มกราคม 2566 - มีนาคม 2567</li>
                    <li>ตำแหน่งงาน: IT Support</li>
                    <li>ระดับ: เจ้าหน้าที่</li>
                    <li>รายละเอียดงาน: ซัพพอร์ตงานทั่วไปทั้ง Hardware และ Software / ให้ข้อมูลสินค้ากับลูกค้าทาง Social และ มือถือ เก็บข้อมูลและสรุปข้อมูล / 
                        เขียนเว็บให้กับองค์กร ในภาษา HTML PHP CSS JAVASCRIPT
                    </li>
                </ul>
            </ul>
        ),
    }
]

const ExperienceSection = () => {
    const [tab, setTab] = useState("y2565")
    const [isPanding, startTransition] = useTransition()
    
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
    
    return (
        <section className='text-white' id='experience'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16'>
                <Image src="/images/com_image.jpg" width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>ประสบการณ์ทำงาน</h2>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("y2565")}
                            active={tab === "y2565"}
                            >
                            {" "}ปี 2565{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("y2566")}
                            active={tab === "y2566"}
                            >
                            {" "}ปี 2566{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection