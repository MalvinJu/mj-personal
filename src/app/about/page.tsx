import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
    description: 'Know my life more',
};

export default function AboutPage() {
    return (
        <section>
        <h1 className="font-bold text-3xl font-serif">About Me.</h1>
        <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
          What's up? I'm Malvin Juanda but most folks call me <b>Vin</b> for short.
        </p>
        <div className="prose prose-neutral max-w-[90%] dark:prose-invert text-neutral-800 dark:text-neutral-200">
            <p>
                I'm a computer science graduate from Bandung Institute of Technology with passion for product, technology, and design. 
                Currently working as fullstack software engineer, where I helped transforming monolithic desktop application to 
                microservices architecture.
            </p>
            <hr
                className="my-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" 
            />
            <ol className="relative border-l mt-5 border-gray-200 dark:border-gray-700">                  
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Are you a generalist or a specialist?</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fullstack Software Engineer</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-300">
                        I possess the ability to devise resolutions for technical challenges and system architecture, 
                        while ensuring that they are in line with the company's needs and strategic direction. In my current company,
                        I involved in IT change initiatives to upgrade our old monolithic applications to microservices architecture.
                        This brings cost for old system maintenance by 30% and reduce error rate by 20%. 
                    </p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Compound interest huh?</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Finance Domain</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-300">
                        My experience as a software developer in the finance domain has provided me with practical knowledges. 
                        This includes expertise in managing general ledger systems, handling petty cash transactions, reconciling bank statements,
                        and overseeing basic accounts receivable and accounts payable processes. This hands-on experience has allowed me to 
                        understand the intricacies of financial software systems and how they can be effectively utilized to streamline
                        operations.
                    </p>
                </li>
                <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Visualize your thought is a thing right?</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Design</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                        While I may not fit the mold of a conventional designer, my visual and analytical skills enable me to excel as a presenter, 
                        effectively conveying design concepts to both stakeholders and design teams. 
                        During my spare time, I engage in a part-time endeavor where I helped micro and small enterprises in establishing their brands. 
                        This involves designing their branding materials and developing their website using the Wordpress platform.
                    </p>
                    <a href="https://www.behance.net/malvinju" target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        Peek my Behance
                        <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </li>
            </ol>

            <hr
                className="my-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" 
            />
            <h2 className="font-bold text-xl font-serif">Skill Set.</h2>
            <ol className="relative border-l mt-5 border-gray-200 dark:border-gray-700">                  
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">.Net Core & .Net Framework</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                        Handling projects using Entity Framework, ASP.NET Web API, Sql Server, and Quartz.
                    </p>
                    <ul className="list-disc text-sm text-gray-500 dark:text-gray-300 ml-4">
                        <li>
                            Migrating old Windows services to centralized schedulers using Quartz .Net that called scheduler API. 
                            This migration reduced maintenance workload due to logging and deployment issues by 80%.
                        </li>
                        <li>
                            Create generic package for service-repository pattern using .Net Core and EF resulting increase 
                            productivity for developer.
                        </li>
                    </ul>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Angular</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                        RxJs, Service worker, and Angular Material
                    </p>
                    <ul className="list-disc text-sm text-gray-500 dark:text-gray-300 ml-4">
                        <li>
                            Develop component for pagination table and report generation.
                        </li>
                        <li>
                            Implement service worker to improve page load performance and background 
                            data sync in remote area with limited internet connection.
                        </li>
                    </ul>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Python</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                        Building moving point object analytical library, implementing generic class and moving point data definition.
                    </p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Others: Vue, Java, React, Git, and Redis</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                        It's knowledge I get through hands-on experience during my personal projects and university studies.
                    </p>
                </li>
            </ol>
        </div>
      </section>
    )
}