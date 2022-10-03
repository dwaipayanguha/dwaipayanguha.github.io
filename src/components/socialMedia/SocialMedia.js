import React, {useContext} from "react";
import {Icon} from "@iconify/react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon color="#55198b" icon="bi:linkedin" width="36" height="36" />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={socialMediaLinks.gmail}
          className="icon-button gitlab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon color="#55198b" icon="simple-icons:gmail" />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon color="#55198b" icon="akar-icons:github-fill" />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon color="#55198b" icon="ant-design:gitlab-filled" />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className="icon-button medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-medium"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.codeforces ? (
        <a
          href={socialMediaLinks.codeforces}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon color="#55198b" icon="simple-icons:codeforces" />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.codechef ? (
        <a
          href={socialMediaLinks.codechef}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon color="#55198b" icon="simple-icons:codechef" />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.atcoder ? (
        <a
          href={socialMediaLinks.atcoder}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* No icon available yet on iconify */}
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.leetcode ? (
        <a
          href={socialMediaLinks.leetcode}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon color="#55198b" icon="simple-icons:leetcode" />
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
