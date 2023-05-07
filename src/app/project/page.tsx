import projectMovingObjcet from "../img/projectMovingObject.jpg"
import projectEastco from "../img/projectEastCo.jpg"
import Image from 'next/image'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Here\'s what i\'m doing in software engineer field',
};
  
export default function ProjectPage() {
    return(
        <section>
            <div className="max-w-2xl px-6 py-6 mx-auto bg-white rounded-xl border-2 dark:border dark:bg-neutral-900 dark:border-gray-600">
                <div className="flex items-center justify-between mt-3">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">2023</span> 
                    <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">Python</a>
                </div> 
                <div className="mt-2">
                    <p>
                        General Ledger System
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        This general ledger system was built using Angular, .Net Core, redis, and Sql Server.
                        For handling large set of data, we introduced redis caching for data in active accounting period.
                    </p>
                </div> 
            </div>

            <div className="max-w-2xl px-6 py-6 mx-auto mt-5 bg-white rounded-xl border-2 dark:border dark:bg-neutral-900 dark:border-gray-600">
                <div className="flex items-center justify-between mt-3">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">2021-2022</span> 
                    <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">Python</a>
                </div> 
                <div className="mt-2">
                    <p>
                        E1 Framework
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        
                    </p>
                </div> 
            </div>

            <div className="max-w-2xl px-6 py-6 mx-auto mt-5 bg-white rounded-xl border-2 dark:border dark:bg-neutral-900 dark:border-gray-600">
                <Image className="rounded-lg" src={projectMovingObjcet} alt="" />
                <div className="flex items-center justify-between mt-3">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">2018</span> 
                    <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">Python</a>
                </div> 
                <div className="mt-2">
                    <p>
                        Library for Supporting Moving Point Data Analysis
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        This library provided generic representation model for moving point object and 
                        implementation of analytic and unsupervised learning algorithms specificly for moving point domain. 
                        The preprocessing classes include stay point detection, trajectory segmentation, RDP, and kalman filter.
                        Analytical classes include trajectory clustering and outlier detection.
                    </p>
                </div> 
            </div>

            <div className="max-w-2xl px-6 py-6 mx-auto  mt-5 bg-white rounded-xl border-2 dark:border dark:bg-neutral-900 dark:border-gray-600">
                <Image className="rounded-lg" src={projectEastco} alt="" />
                <div className="flex items-center justify-between mt-3">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">2017</span> 
                    <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">Android</a>
                </div> 
                <div className="mt-2">
                    <p>
                        Eastco
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Eastco is a canteen order management system which make user and tenant easier to make and manage orders.
                    </p>
                </div> 
            </div>
        </section>
    )
}