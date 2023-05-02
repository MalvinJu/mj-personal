import { IconLink } from '../models'
import { IconGithub, IconLinkedin, IconEmail } from './icons';

export function LinkGroup({ links }: { links: IconLink[] }) {
    return (
        <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
            {links.map((link: IconLink) => {
                let icon;
                if (link.icon === "github") icon = <IconGithub/>
                else if (link.icon === "linkedin") icon = <IconLinkedin/>
                else icon = <IconEmail/>
                
                return (
                    <li key={link.url}>
                        <a
                            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 space-x-1.5 transition-all"
                            rel="noopener noreferrer"
                            target="_blank"
                            href={link.url}
                        >
                            {icon}
                            <p className="h-7">{link.name}</p>
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}