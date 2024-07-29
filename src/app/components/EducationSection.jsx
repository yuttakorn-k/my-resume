"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const Data = [
    {
        title: "ระดับมัธยมต้น",
        id: "lse",
        content: (
            <ul className='list-disc pt-2'>
                <li>ระดับมัธยมต้น</li>
                <ul>
                    <li>โรงเรียนดงขุยวิริยานุสรณ์</li>
                    <li>1069 ตำบล ตะกุดไร อำเภอชนแดน เพชรบูรณ์ 67190</li>
                    <li>ม.3</li>
                    <li>เกรดเฉลี่ย: 3.03</li>
                </ul>
            </ul>
        ),
    },{
        title:"ระดับอาชีวศึกษา",
        id:"vocational",
        content:(
            <ul className='list-disc pt-2'>
                <li>ระดับอาชีวศึกษา</li>
                <ul>
                    <li>วิทยาลัยเทคโนโลยีภาคตะวันออก(อีเทค)</li>
                    <li>231 ตำบล หนองตำลึง อำเภอพานทอง ชลบุรี 20160</li>
                    <li>ประกาศนียบัตรวิชาชีพ (ปวช.)</li>
                    <li>สาขาวิชา คอมพิวเตอร์ธุรกิจ</li>
                    <li>เกรดเฉลี่ย: 3.16</li>
                </ul>
                <li>ระดับอาชีวศึกษาระดับสูง</li>
                <ul>
                    <li>วิทยาลัยเทคโนโลยีภาคตะวันออก(อีเทค)</li>
                    <li>231 ตำบล หนองตำลึง อำเภอพานทอง ชลบุรี 20160</li>
                    <li>ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)</li>
                    <li>สาขาวิชา คอมพิวเตอร์ธุรกิจ</li>
                    <li>เกรดเฉลี่ย: 3.85</li>
                </ul>
            </ul>
        )
    },{
        title:"ระดับปริญญาตรี",
        id:"bachelor",
        content:(
            <ul className='list-disc pt-2'>
                <li>ระดับปริญญาตรี</li>
                <ul>
                    <li>มหาวิทยาลัยธนบุรี</li>
                    <li>248 ซอย เพชรเกษม 110 แขวงหนองค้างพลู เขตหนองแขม กรุงเทพฯ 10160</li>
                    <li>ปริญญาตรี</li>
                    <li>คณะ วิทยาศาสตร์และเทคโนโลยี (วท.บ.)</li>
                    <li>สาขาวิชา วิทยาการข้อมูลและเทคโนโลยีสารสนเทศ</li>
                    <li>คาดว่าจะสำเร็จการศึกษาในปี 2569</li>
                </ul>
            </ul>
        )
    }
]


const EducationSection = () => {
    const [tab, setTab] = useState("lse")
    const [isPanding, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
    return (
        <section>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16'>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white'>การศึกษา</h2>
                    <h2 className='text-4xl font-bold text-white mb-4'></h2>
                    <div className="flex flex-row justify-start">
                        <TabButton className='font-semibold border-b border-[#0B47BF]'
                            selectTab={() => handleTabChange("lse")}
                            active={tab === "lse"}
                        >
                            {" "}ระดับมัธยมต้น{" "}
                        </TabButton>
                        <TabButton className='font-semibold border-b border-[#0B47BF]'
                            selectTab={() => handleTabChange("vocational")}
                            active={tab === "vocational"}
                        >
                            {" "}ระดับอาชีวศึกษา{" "}
                        </TabButton>
                        <TabButton className='font-semibold border-b border-[#0B47BF]'
                            selectTab={() => handleTabChange("bachelor")}
                            active={tab === "bachelor"}
                        >
                            {" "}ระดับปริญาตรี{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8 text-white">{Data.find((t) => t.id === tab).content}</div>
                </div>
                <Image src="/images/education_image.jpg" width={500} height={500} />
            </div>
        </section>
    )
}

export default EducationSection