import React from 'react'
import Link from 'next/link'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'

function SocialButtons() {
  return (
    <div className="m-8">
      <div className="flex items-center justify-center">
        <div className="flex max-h-20 items-center">
          <Link href="https://github.com/liamkyoung" passHref>
            <div className="button hover:text-portfolio-yellow">
              <GitHubIcon />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/liamkyoung/" passHref>
            <div className="button hover:text-portfolio-yellow">
              <LinkedInIcon />
            </div>
          </Link>
          <Link href="https://instagram.com/liamkyoung" passHref>
            <div className="button hover:text-portfolio-yellow">
              <InstagramIcon />
            </div>
          </Link>
          <Link href="mailto:liamkingstonyoung@gmail.com" passHref>
            <div className="button hover:text-portfolio-yellow">
              <EmailIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SocialButtons
