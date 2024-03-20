import MainLayout from '@/components/layout/MainLayout';
import { useRouter } from 'next/router';
import React from 'react';

const Index = () => {
    const router=useRouter()
    return (
        <div className='flex items-center justify-center min-h-[100vh]'>
            <button onClick={()=>{
                localStorage.setItem('login',true) 
                router.replace('/checkout')
                }} className='bg-[#083DA0] py-2 px-[100px] text-white rounded-[4px]'>Login In</button>
        </div>
    );
};

export default Index;


Index.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};