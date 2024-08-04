"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import GitHubLogo from "../../../public/github-icon.svg"
import Image from 'next/image'


const EmailSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSONdata,
        }
        const response = await fetch(endpoint, options);
        const resData = await response.json();
        if (response.status === 200) {
            console.log('Message sent.');
            setEmailSubmitted(true);
        }
    }

    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gab-4 relative' id="contact">
            <div className='z-10'><h5 className='text-xl font-bold text-white my-2'>ติดต่อฉัน</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    หากคุณสนใจ สามารถติตต่อผมได้ที่<br></br>
                    โทร 0623182808<br></br>
                    Email: yuttakorn.kaey@e-tech.ac.th <br></br>
                    Line ID: xizzer.ez
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="github.com">
                        <Image src={GitHubLogo} alt='GitHub'></Image>
                    </Link>
                </div>
            </div>
            <div className='z-10'>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Email</label>
                        <input type='email' id='email' name='email' required className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='exsample@email.com' />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white mb-2 block text-sm font-medium">Subject</label>
                        <input type='text' id='subject' name='subject' required className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='ผมอยากติดต่อกับคุณ' />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="text-white mb-2 block text-sm font-medium">Message</label>
                        <textarea name='message' id='message' required className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='เขียนข้อความของคุณที่นี่' />
                    </div>
                    <button type='submit' className='bg-[#0B47BF] hover:bg-[#0798F2] text-white font-medium py-2.5 px-5 rounded-lg w-full'>ส่งข้อความ</button>
                    {
                        emailSubmitted && (
                            <p className='text-green-500 text-sm mt-2'>
                                ส่ง Email เรียบร้อยแล้ว
                            </p>
                        )
                    }
                </form>
            </div>
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0B47BF] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/4'></div>
        </section>
    )
}

export default EmailSection