export default function AboutPage() {
    return (
        <section>
        <h1 className="font-bold text-3xl font-serif">About Me.</h1>
        <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
          What's up? I'm Malvin Juanda but most folks call me <b>Vin</b> for short.
        </p>
        <div className="prose prose-neutral max-w-[90%] dark:prose-invert text-neutral-800 dark:text-neutral-200">
            <p>
                I'm a computer science graduate from Bandung Institute of technology with passion for product, technology and design. 
                I'm currently working as fullstack software enginner, where I helped transforming monolitic desktop application to 
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
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        In the world of business; technology, design, and needs are all pivotal and should be given equal importance rather than prioritizing one over the other. 
                        A truly exceptional website is not solely evaluated based on its visual appeal, but also on its functionality and ease of use. 
                        Leveraging my background as a full-stack software engineer, I possess the ability to devise resolutions for technical challenges and system architecture, 
                        while ensuring that they are in line with the company's needs and strategic direction
                    </p>
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Compound interest huh?</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Finance Domain</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
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
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        While I may not fit the mold of a conventional designer, my visual and analytical skills enable me to excel as a presenter, 
                        effectively conveying design concepts to both stakeholders and design teams. 
                        During my spare time, I engage in a part-time endeavor where I help micro and small enterprises in establishing their brands. 
                        This immersive journey grants me the privilege of witnessing the birth of these ventures, all the way through to their completion
                    </p>
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
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Handling projects using Entity Framework, ASP.NET Web API, Sql Server, and Quartz.
                    </p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Angular</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Service worker, RxJs, and Angular Material
                    </p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Python</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Building moving point object analytical library, implementing generic class and moving point data definition.
                    </p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Others: Vue, Java, React, Git, and Redis</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        It's knowledge I get through hands-on experience during my personal projects and university studies.
                    </p>
                </li>
            </ol>
        </div>
      </section>
    )
}