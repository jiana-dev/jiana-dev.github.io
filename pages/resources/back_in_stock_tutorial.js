import React, { useState } from "react";

import HeadTag from '../../components/HeadTag';

import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import BlogPostHeader from '../../components/BlogPostHeader';

import postData from '../../public/data/resources/back_in_stock_tutorial.json';

import { CodeBlock } from '@atlaskit/code';
import { Code } from '@atlaskit/code';

import CODE_BLOCKS from '../../components/code/BackInStockCode';

export default function BackInStockTutorial() {
  const [mode, setMode] = useState("dark");

  const post =
    <>
      <p>Have you ever wasted your life away checking if that item you&#39;ve been eyeing for months is finally back in stock? Do you wish you could just live your life not obsessively checking over material things and be notified when something is available to purchase again?</p>
      <p>If so, you may be in luck, because this was the exact scenario that led me to making something so that I&#39;d never have to waste another moment checking a store&#39;s online website.</p>
      <br/>
      <p><strong>If you have coding experience</strong>, this will be a breeze! Take a look at <a href="#experience-with-coding">this section</a> for a high level overview and if you&#39;d like, you could fill in the details yourself for a fun activity. </p>
      <br/>
      <p><strong>If you don&#39;t have coding experience</strong>, welcome! I promise it&#39;ll be at least kind of fun, if you&#39;re up for a little learning. I made this guide for you to dip your toes into this world. If you have any troubles at all, <a href="mailto:jiana.dev@gmail.com">feel free to reach out to me</a>. My goal is to make this easily digest- and understand-able.</p>
      <p>Don&#39;t worry about the length of this tutorial, it&#39;s long because it is getting into nitty gritty details. Getting this up and running shouldn&#39;t take more than 15 minutes. It may be helpful to read the <a href="#new-learners-with-coding">section</a> in the appendix for new learners.</p>
      <p><em>(If you&#39;ve decided you&#39;re really not up for learning and just want the end product, <a href="https://jianajavier.github.io/back_in_stock_landing/">this is for you</a></em>.)</p>
      <br/>
      <p><strong>What you&#39;ll have at the end of this</strong>: A script running at the frequency of your choice, at a time of your choosing, that will send you an email when your specified item is back in stock.<sup><a href="#cliffnote-1">1</a></sup></p>
      <p>No more obsessively checking online store websites only to see the same item, still out of stock. I hope it&#39;s not just me that does that, &#39;cause then this whole thing would be pretty embarrassing.</p>
      <p>Assuming I&#39;m not the only obsessive shopper out there, let&#39;s get into it.</p>
      <br/>
      <p><strong>TL; DR</strong> At the end of this you&#39;ll have a program running at the frequency and time of your choice that will send you an email when your online item is back in stock.<sup><a href="#cliffnote-1">1</a></sup></p>
      <h2 id="table-of-contents">Table of Contents</h2>
      <ul>
        <li><p><a href='#setup'>Setup</a></p>
          <ul>
            <li><a href='#things-you-ll-need'>Things you&#39;ll need</a>
              <ul>
                <li>Installing Docker</li>
                <li>Setting up the email address to send your notifications from (or use mine)</li>
                <li>Getting the code (Clone my repository)</li>
              </ul>
            </li>
            <li><a href='#modifying-the-code'/>Modifying the code</li>
            <li><a href='#testing-the-code'/>Testing the code</li>
            <li><a href='#setting-up-the-job'/>Setting up the job</li>
            <li><a href='#testing-the-job'/>Testing the job</li>
          </ul>
        </li>
        <li><p><a href='#adding-your-own-stores-and-links'>Adding your own stores and links</a></p>
          <ul>
            <li>Tweaking the script and testing your tweaks<ul>
                <li><a href='#tweaking-back_in_stock-py-for-an-online-item-that-contains-details-in-link'>For an item that contains product details in link</a></li>
                <li><a href='#tweaking-back_in_stock-py-for-an-online-item-that-does-not-contain-details-in-line'>For an item that does <strong>not</strong> contain details in link (very in-depth)</a></li>
              </ul>
            </li>
            <li><a href='#adding-your-own-stores-and-links'>Adding more links or online stores</a></li>
          </ul>
        </li>
        <li><p><a href='#appendix'>Appendix</a></p>
          <ul>
            <li><a href='#general'>General</a></li>
            <li><a href='#why-are-we-using-docker-'>Why are we using Docker?</a></li>
            <li><a href='#experience-with-coding'>For those with coding experience</a></li>
            <li><a href='#new-learners-with-coding'>For those beginning to learn coding</a></li>
            <li><a href='#the-helper-methods'>Explanation on the helper methods</a></li>
            <li><a href='#learning-about-docker-volumes'>Docker issues - Learning about Docker volumes</a></li>
            <li><a href='#debugging'>Debugging</a></li>
            <li><a href='#cliffnotes'>Cliffnotes</a></li>
          </ul>
        </li>
      </ul>
      <h3 id="setup">Setup</h3>
      <h4 id="things-you-ll-need">Things you&#39;ll need</h4>
      <ol>
        <li>
          <p><strong>Docker</strong></p>
          <ul>
            <li>
              <p>
                <a href="https://docs.docker.com/docker-for-mac/install/">https://docs.docker.com/docker-for-mac/install/</a> <strong>OR</strong>
              </p>
            </li>
            <li>
              <p>Install with Homebrew (a <a href="https://en.wikipedia.org/wiki/Package_manager">package manager</a> for MacOS)</p>
              <CodeBlock
                language="shell"
                text={ CODE_BLOCKS.BREW }
                theme={{ mode }}
                showLineNumbers={false}
              />
            </li>
          </ul>
        </li>
        <li>
          <p><strong>Email address</strong> to send your main email address the notification<sup><a href="#cliffnote-2">2</a></sup></p>
          <ul>
            <li>Call it yournamescripts@gmail.com, for example</li>
            <li><a href="https://support.google.com/accounts/answer/185833?hl=en">Create an app password</a> to use for the script</li>
          </ul>
        </li>
        <li>
          <p><strong>Code</strong></p>
          <ul>
            <li>
              <p> 
                <Code
                  language="text"
                  text="git clone"
                  theme={{ mode }}
                />
                <sup><a href="#cliffnote-3">3</a></sup> my <a href="https://github.com/jianajavier/back_in_stock">back in stock repository</a>
                somewhere on your computer. I have it in a folder called&nbsp;
                <Code
                  language="text"
                  text="workspace"
                />
                &nbsp;in my home directory.
              </p>
              <CodeBlock
                language="shell"
                text={ CODE_BLOCKS.CLONE }
                theme={{ mode }}
                showLineNumbers={false}
              />
            </li>
          </ul>
        </li>
      </ol>
      <h4 id="modifying-the-code">Modifying the Code</h4>
      <ol>
        <li>
          <p>Change the email and password constants<sup><a href="#cliffnote-4">4</a></sup> in the code.</p>
          <ol>
            <li>
              <p>Open the&nbsp;
              <Code
                language="text"
                text="back_in_stock/helpers/web_helper_methods.py"
              />
            &nbsp;file</p>
          </li>
          <li>
            <p>Change the constants in&nbsp;
              <Code
                  language="text"
                  text="helpers/web_helper_methods.py"
                />
              </p>
              <CodeBlock
                language="python"
                text={ CODE_BLOCKS.CONSTANTS }
                theme={{ mode }}
              />
            </li>
          </ol>
        </li>
      </ol>
      <h4 id="testing-the-code">Testing the code</h4>
      <ol>
        <li>
          <p>Verify that the example item in the link in&nbsp;
            <Code
              language="text"
              text="everlane.txt"
            />
          &nbsp;is <strong>in stock</strong></p>
          <ul>
            <li>If it isn&#39;t, find a similar item (on the same site) that is in stock and change the URL to that item.<sup><a href="#cliffnote-5">5</a></sup></li>
          </ul>
        </li>
        <li>
          <p>Ensure docker is running. If you&#39;re on a Mac, you&#39;ll most likely see the Docker icon in your menu bar.</p>
          <p><img src="../images/back_in_stock_tutorial/docker_running.png" alt="docker_running"/></p>
          <p> You can also make sure by running this and making sure you don&#39;t get an error.</p>
          <CodeBlock
            language="text"
            text="$ docker ps"
            theme={{ mode }}
            showLineNumbers={false}
          />
        </li>
        <li>
          <p>Make sure you&#39;re in the&nbsp; 
          <Code
            language="text"
            text="back_in_stock"
          />
         &nbsp;directory in the terminal (&nbsp;
          <Code
            language="text"
            text="cd"
            theme={{ mode }}
          />
         &nbsp;to the directory) and build<sup><a href="#cliffnote-6">6</a></sup> the container,</p>

          <CodeBlock
            language="shell"
            text={ CODE_BLOCKS.BUILD_CONTAINER }
            theme={{ mode }}
            showLineNumbers={false}
          />
          <p>and run<sup><a href="#cliffnote-7">7</a></sup> the script</p>
          <CodeBlock
            language="shell"
            text={ CODE_BLOCKS.RUN_CONTAINER }
            theme={{ mode }}
            showLineNumbers={false}
          />
        </li>
        <li>
          <p>You should have received a <strong>Back in Stock!</strong> email at your&nbsp; 
          <Code
            language="text"
            text="TO_EMAIL"
            theme={{ mode }}
          />
          </p>
        </li>
      </ol>
      <h4 id="setting-up-the-job">Setting up the job</h4>
      <ol>
        <li>
          <p>You can either set this up via cron or (as I have it) a Launch Daemon on MacOS</p>
          <ul>
            <li>Create this file: 
              <Code
                language="text"
                text="/Library/LaunchDaemons/local.back_in_stock.plist"
              />
            </li>
          </ul>
          <CodeBlock
            language="xml"
            text={ CODE_BLOCKS.PLIST }
            theme={{ mode }}
            showLineNumbers={true}
          />
          <ul>
            <li><p>This file is used to tell our computer when to run our program</p>
              <ul>
                <li>It says to run our program at 10:24PM every day</li>
                <li>It redirects <strong>output</strong> or <strong>errors</strong> to the files in 
                  <Code
                    language="text"
                    text="/your/absolute/path/back_in_stock/logs/"
                  />
                  . Change this to be the absolute path where you put your 
                  <Code
                    language="text"
                    text="back_in_stock"
                  />
                 code.<sup><a href="#cliffnote-8">8</a></sup>
                </li>
              </ul>
            </li>
            <li>
              <p>Now I need to 
                <Code
                  language="text"
                  text="load"
                  theme={{mode}}
                />
                this configuration file using 
                <Code
                  language="text"
                  text="launchctl"
                  theme={{mode}}
                />.
              </p>
              <CodeBlock
                language="shell"
                text={ CODE_BLOCKS.LAUNCH_CTL }
                theme={{ mode }}
                showLineNumbers={false}
              />
              <ul>
                <li>
                  <p>Anytime I make a change to this configuration file (
                  <Code
                    language="text"
                    text="/Library/LaunchDaemons/local.back_in_stock.plist"
                  />
                  ), I need to 
                  <Code
                    language="text"
                    text="unload"
                    theme={{mode}}
                  />
                  and then 
                  <Code
                    language="text"
                    text="load"
                    theme={{mode}}
                  />
                  it again.</p>
                </li>
                <li>
                  <p>I set up an alias<sup><a href="#cliffnote-9">9</a></sup> to run this more easily. This means when I enter the command 
                  <Code
                    language="text"
                    text="reload_back_in_stock"
                    theme={{mode}}
                  />
                  , any changes I make to the launch daemon will be applied.<sup><a href="#cliffnote-10">10</a></sup></p>
                  <CodeBlock
                    language="shell"
                    text={ CODE_BLOCKS.LAUNCH_ALIAS }
                    theme={{ mode }}
                    showLineNumbers={false}
                  />
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
      <h4 id="testing-the-job">Testing the job</h4>
      <ol>
        <li>
          <p>Set up the script to run a few minutes from the current time to test</p>
          <CodeBlock
            language="xml"
            text={ CODE_BLOCKS.XML_TIME }
            theme={{ mode }}
            showLineNumbers={true}
          />
        </li>
        <li>
          <p>Make sure the alias from <a href="#setting-up-the-job">the previous step</a> is set up, and then reload.<sup><a href="#cliffnote-11">11</a></sup></p>
          <CodeBlock
            language="shell"
            text={ '$ reload_back_in_stock' }
            theme={{ mode }}
            showLineNumbers={false}
          />
        </li>
        <li>
          <p>See the e-mail in your inbox (if it worked)</p>
          <ul>
            <li>If it didn&#39;t, <a href="mailto:jiana.dev@gmail.com">shoot me a message</a> so we can try troubleshooting together!</li>
          </ul>
        </li>
      </ol>
      <p><strong>Now you&#39;re all set up to add your own stores and links!</strong></p>
      <h3 id="adding-your-own-stores-and-links">Adding your own stores and links</h3>
      <p> This will differ from website to website. I&#39;ll give you the general toolbox that should get you where you want to be, but if you still run into trouble and would really like to do this, <a href="mailto:jiana.dev@gmail.com">message me</a>, and I&#39;ll do my best to help you out!</p>
      <p>I plan to create a video to demonstrate this better, so let me know if you think that would be helpful!</p>
      <h4 id="tweaking-back_in_stock-py-for-an-online-item-that-contains-details-in-link">Tweaking 
<code>back_in_stock.py</code>
 for an online item that contains details in link</h4>
      <p>I&#39;ve been eyeing these <a href="https://shop.lululemon.com/p/women-pants/Align-Pant-Tall/_/prod9410008?color=26083&amp;sz=4">Lululemon leggings</a> for months now and they just never seem to come back in stock.</p>
      <p>Within this link, you can see 
<code>color=26083&amp;sz=4</code>
, which means I don&#39;t have to click anything in the browser to specify my colour or size, it&#39;s contained within the link itself.</p>
      <p>This is the easiest type of online item because all we&#39;ll need to do is check if the &quot;Add to Bag&quot; button is enabled.</p>
      <h5 id="steps">Steps</h5>
      <ol>
        <li>
          <p>Put the link in a text file. Here I am going into my 
<code>back_in_stock</code>
 directory and putting the link in a text file called 
<code>lululemon.txt</code>
.</p>
          <CodeBlock
            language="shell"
            text={ CODE_BLOCKS.LINK_IN_FILE }
            theme={{ mode }}
            showLineNumbers={true}
          />
        </li>
        <li>
          <p>Add a method to 
<code>back_in_stock.py</code>
 to use 
<code>lululemon.txt</code>
<sup><a href="#cliffnote-12">12</a></sup></p>
          <CodeBlock
            language="python"
            text={ CODE_BLOCKS.ADD_METHOD }
            theme={{ mode }}
            showLineNumbers={true}
          />
        </li>
        <li><p>Get the add button</p>
          <ul>
            <li>
              <p>Go onto the <a href="https://shop.lululemon.com/p/women-pants/Align-Pant-Tall/_/prod9410008?color=26083&amp;sz=4">Lululemon page</a>, right-click on the <strong>Add to Bag</strong> button and click <strong>Inspect</strong>. This will show you the page&#39;s source code/html. We want to look for the html that makes up the <strong>Add to Bag</strong> button</p>
              <p>In our case, the html looks like this:</p>
              <CodeBlock
                language="html"
                text={ CODE_BLOCKS.BUTTON_HTML }
                theme={{ mode }}
                showLineNumbers={false}
              />
              <p>How I read the above HTML:</p>
              <ul>
                <li>The <strong>Add to Bag</strong> button is a 
<code>button</code>
 <strong><em>element</em></strong> with
                  <ul>
                    <li><strong><em>classes</em></strong>: 
<code>button-1xp0M, lll-text-button, add-to-bag</code>
 , and 
<code>buttonPrimary-2q4bX</code>
</li>
                    <li><strong><em>type</em></strong>: 
<code>button</code>
</li>
                    <li><strong><em>data attribute</em></strong>: 
<code>data-lulu-track</code>
 with value 
<code>&quot;pdp-add-to-bag-regular-enabled&quot;</code>
</li>
                  </ul>
                </li>
              </ul>
              <p>All of these <strong><em>classes</em></strong>:</p>
              <CodeBlock
                language="html"
                text={ CODE_BLOCKS.BUTTON_CLASSES }
                theme={{ mode }}
                showLineNumbers={false}
              />
              <p>are names I can use to find this element in my program. </p>
              <p>My intuition tells me that other buttons on the page are likely to share some of the other classes on this button (I.e. 
<code>button-1xp0M</code>
 or 
<code>lll-text-button</code>
), since classes can determine common elements like styling and positioning.</p>
              <p>I aim to choose the one most specific to the <strong>Add to Bag</strong> button. In this case, that will be the 
<code>add-to-bag</code>
 class.</p>
              <p>This tells me that in my script, I can use Selenium<sup><a href="#cliffnote-13">13</a></sup> to find the button <em>element</em> by it&#39;s <a href="https://selenium-python.readthedocs.io/locating-elements.html#locating-elements-by-class-name">class name</a>.<sup><a href="#cliffnote-14">14</a></sup></p>
              <p>I&#39;ll be using this method:</p>
              <CodeBlock
                language="python"
                text={ CODE_BLOCKS.SEL_FIND_BY }
                theme={{ mode }}
                showLineNumbers={false}
              />
            </li>
          </ul>
        </li>
        <li><p>Add the line to 
<code>back_in_stock.py</code>
. I also included adding error handling so our program won&#39;t crash if it can&#39;t find the button.</p>
          <CodeBlock
            language="python"
            text={ CODE_BLOCKS.NEW_LULU }
            theme={{ mode }}
            showLineNumbers={true}
          />
        </li>
        <li><p>Look at what distinguishes an out of stock page from a back in stock page</p>
          <ul>
            <li>Find an item on the site that is <strong>in stock</strong> to confirm that the only difference is that the <strong>Add to Bag</strong> button is enabled</li>
          </ul>
        </li>
        <li><p>Now that we&#39;ve found the add button element, let&#39;s check if the add button <a href="https://selenium-python.readthedocs.io/api.html#selenium.webdriver.remote.webelement.WebElement.is_enabled">is enabled</a> through the code:</p>
          <CodeBlock
            language="python"
            text={ CODE_BLOCKS.CHECK_ADD_ENABLED }
            theme={{ mode }}
            showLineNumbers={true}
          />
        </li>
        <li><p>Use methods 
<code>save_screenshot</code>
 and 
<code>send_email</code>
 from 
<code>helpers/web_helper_methods.py</code>
 to save the screenshot and email your 
<code>TO_EMAIL</code>
. This will be a common step among all websites. This tells our program to save a screenshot and send us an email if the <strong>Add Button</strong> is enabled.</p>
          <CodeBlock
            language="python"
            text={ CODE_BLOCKS.EMAIL_IF_ENABLED }
            theme={{ mode }}
            showLineNumbers={true}
          />
        </li>
        <li><p>Call your new method in the <strong>main</strong> method of the program.</p>
          <CodeBlock
            language="python"
            text={ CODE_BLOCKS.CALL_IN_MAIN }
            theme={{ mode }}
            showLineNumbers={true}
          />
        </li>
        <li><p>Test<sup><a href="#cliffnote-18">18</a></sup> your method. Change the condition by adding 
<code>not</code>
 since the item is not in stock and you just want to test the code.</p>
          <CodeBlock
            language="python"
            text={ CODE_BLOCKS.TEST_CODE }
            theme={{ mode }}
            showLineNumbers={true}
          />
        </li>
        <li><p>Run the code. You should receive an email.</p>
          <CodeBlock
            language="shell"
            text={ CODE_BLOCKS.RUN_CODE }
            theme={{ mode }}
            showLineNumbers={false}
          />
        </li>
      </ol>
      <h4 id="tweaking-back_in_stock-py-for-an-online-item-that-does-not-contain-details-in-link">Tweaking 
<code>back_in_stock.py</code>
 for an online item that does not contain details in link</h4>
      <p>Now let&#39;s say I&#39;ve been monitoring <a href="https://skims.com/products/cozy-knit-short-robe-aqua">this robe</a> but everytime I want to purchase it, it&#39;s out of stock. This item differs from the previous one because I need to click the colour and size I want before checking if it&#39;s in stock.</p>
      <p><em>I know this website has a &quot;Join the Waitlist&quot; option but not all do, and this is more to demonstrate the concept for two different types of websites</em>.</p>
      <p><strong>UPDATE: Since I've written this, the website has changed so the code is outdated. You can still read on as it will give you versatility in handling different websites. The final code can be found in the back_in_stock_final.py file.</strong></p>
      <h5 id="steps">Steps</h5>
      <ol>
        <li><p>Put the link in a text file. Here I am going into my 
<code>back_in_stock</code>
 directory and putting the link in a text file called 
<code>skims.txt</code>
.</p>
          <CodeBlock
            language="python"
            text={ CODE_BLOCKS.CREATE_SKIMS }
            theme={{ mode }}
            showLineNumbers={false}
          />
        </li>
        <li><p>Add a method to 
<code>back_in_stock.py</code>
 to handle 
<code>skims.txt</code>
</p>
          <CodeBlock
            language="python"
            text={ CODE_BLOCKS.NEW_SKIMS_METHOD }
            theme={{ mode }}
            showLineNumbers={true}
          />
        </li>
        <li><p>In your main method, call the new method</p>
          <CodeBlock
            language="python"
            text={ CODE_BLOCKS.CALL_NEW_SKIMS }
            theme={{ mode }}
            showLineNumbers={true}
          />
        </li>
        <li><p id="click-color-button">Now, on the website itself, I know the colour is in the link, but for demo purposes, I&#39;m going to choose a different colour. Let&#39;s find out how to identify the element to get it through Selenium.</p>
          <ol>
            <li><p>Right-click on the colour you want and click <strong>Inspect Element</strong>.</p>
              <p><img src="../images/back_in_stock_tutorial/Screen Shot 2020-09-25 at 8.36.48 PM.png" alt="inspect_element_right_click"/></p>
              <p>How I read the above HTML:</p>
              <ul>
                <li>The <strong>Color button</strong> is a 
<code>button</code>
 <strong><em>element</em></strong> that<ul>
                    <li>has <strong><em>classes</em></strong>: 
<code>config__color-btn, btn-icon, is-visible</code>
<sup><a href="#cliffnote-15">15</a></sup></li>
                    <li>contains a 
<code>span</code>
 <strong><em>element</em></strong> that has<ul>
                        <li><strong><em>classes</em></strong>: 
<code>config__color-inner</code>
, 
<code>swatch</code>
, and 
<code>is-visible</code>
</li>
                        <li><strong><em>data attributes</em></strong>:<ul>
                            <li>
<code>data-color</code>
 with value 
<code>&quot;STONE&quot;</code>
</li>
                            <li>
<code>data-content</code>
 with value 
<code>&quot;waitlist&quot;</code>
</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <p>What this tells me:</p>
              <ul>
                <li>There is no &quot;simple&quot; way to use Selenium&#39;s simplistic 
<code>find_by</code>
 methods like we did in the Lululemon example</li>
                <li>
<code>data-color</code>
 within the 
<code>span</code>
 is the defining attribute on the button</li>
              </ul>
            </li>
            <li><p>For now, we can use what I think is the simplest for this purpose (<a href="https://selenium-python.readthedocs.io/locating-elements.html#locating-by-xpath">
<code>find_element_by_xpath</code>
</a>). Let&#39;s put this in our code first.</p>
              <CodeBlock
                language="python"
                text={ CODE_BLOCKS.FIND_ELEM_BY_XPATH }
                theme={{ mode }}
                showLineNumbers={true}
              />
            </li>
            <li><p>Then we need to <strong>get the absolute xpath of this element</strong>.</p>
            <p><img src="../images/back_in_stock_tutorial/Screen Shot 2020-09-25 at 8.54.31 PM.png" alt="get absolute xpath"/></p>
            </li>
            <li><p>Paste it within the empty quotes on the line we just added.<sup><a href="#cliffnote-16">16</a></sup></p>
            <CodeBlock
              language="python"
              text={ CODE_BLOCKS.FILL_XPATH }
              theme={{ mode }}
              showLineNumbers={true}
            />
            </li>
            <li>
              <p>At this point, I would <a href="debugging">test my code</a>.</p>
            </li>
            <li>
              <p>During testing, I realized I was getting an error because a popup was showing up on the page, making me unable to click the color button. After testing, we end up with the code to click the color button and handle any errors if they come up.</p>
              <CodeBlock
                language="python"
                text={ CODE_BLOCKS.SKIMS_METHOD_EDIT }
                theme={{ mode }}
                showLineNumbers={true}
              />
            </li>
          </ol>
        </li>
        <li><p>Now that we&#39;ve clicked the colour, let&#39;s pick our size.</p>
          <p><strong>UPDATE: Since I've written this, the website has changed the way to choose size. It is much easier now (just clicking a button). You can still read on as it will give you versatility in handling different websites. But if you prefer, you can repeat the color-choosing steps above for the size. And then check out the final code in the back_in_stock_final.py file.</strong> </p>
          <p>We'll move on as if the website didn't change. First, let&#39;s think about how we, as humans, do this before we figure out how we&#39;ll tell Selenium to.</p>
        </li>
        <li><p>As humans, we first click the select dropdown. </p>
          <ul>
            <li>We don&#39;t need to go as far as clicking it if we already see that it says WAITLIST or SOLD OUT beside the size text</li>
            <li>If we see WAITLIST or SOLD OUT on the size we want, we don&#39;t need to click anything</li>
            <li>This is different from the Everlane example because we don&#39;t need to check if the &quot;Add to Bag&quot; button is enabled in order to see if it&#39;s in stock<ul>
                <li>In fact, the &quot;Add to Bag&quot; button doubles as a &quot;Waitlist&quot; button if the item is sold out, so if we did the same thing and checked if the &quot;element with  
<code>id=&quot;bagBtnProduct&quot;</code>
&quot; 
<code>is_enabled?</code>
, we would not be getting the correct answer</li>
                <li>We need a different approach for this one</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><p>First, let&#39;s get the Selenium code to click the dropdown. Repeat the <a href="#click-color-button">same steps</a> to click the color button. You should end up with something like this:</p>
          <CodeBlock
            language="python"
            text={ CODE_BLOCKS.SKIMS_CLICK_COLOR_BUTTON }
            theme={{ mode }}
            showLineNumbers={true}
          />
          <p>How I got here:</p>
          <ul>
            <li><p>When I inspected the element I saw that there was a much simpler way to get the size dropdown (by using the id 
<code>&quot;Option1&quot;</code>
). I didn&#39;t need to use 
<code>xpath</code>
 here</p>
            </li>
            <li><p>I also added the 
<code>save_screenshot</code>
 method so I could quickly see if what I had was yielding what I wanted so far.</p>
            </li>
            <li><p>Run the program</p>
              <CodeBlock
                language="python"
                text={ CODE_BLOCKS.RUN_SKIMS }
                theme={{ mode }}
                showLineNumbers={true}
              />
            </li>
            <li><p>Check the screenshot located in 
<code>/Users/jianajavier/workspace/back_in_stock/screenshots</code>
</p>
            </li>
          </ul>
        </li>
        <p>   <img src="../images/back_in_stock_tutorial/click_select.png" alt="click_select"/></p>
        <ul>
          <li>Good. This is what we want.</li>
        </ul>
        <li><p>Now to check if the size we want is available, we will see if the text in the option contains &quot;SOLD OUT&quot; or &quot;WATILIST&quot;. If it does <strong>not</strong>, then we will email ourselves.</p>
          <ol>
            <li><p>When the item is not in stock, the <strong><em>element</em></strong> for the size dropdown option looks like this:</p>
              <CodeBlock
                language="html"
                text={ CODE_BLOCKS.OPTION_NIS }
                theme={{ mode }}
                showLineNumbers={false}
              />
            </li>
            <li><p>Through Selenium, let&#39;s get the element using xpath.</p>
              <CodeBlock
                language="python"
                text={ CODE_BLOCKS.SKIMS_XPATH }
                theme={{ mode }}
                showLineNumbers={true}
              />
            </li>
            <li><p>And now we need to get it&#39;s text.<sup><a href="#cliffnote-17">17</a></sup></p>
              <CodeBlock
                language="python"
                text={ CODE_BLOCKS.SKIMS_GET_TEXT }
                theme={{ mode }}
                showLineNumbers={true}
              />
            </li>
            <li><p>Let&#39;s check if 
<code>size_text</code>
 contains either &quot;Sold out&quot; or &quot;Waitlist&quot;</p>
              <CodeBlock
                language="python"
                text={ CODE_BLOCKS.SKIMS_CHECK_TEXT }
                theme={{ mode }}
                showLineNumbers={true}
              />
            </li>
          </ol>
        </li>
        <li id='#testing-skims'><p>Test to see if our email sending works when the item is not in stock.</p>
          <CodeBlock
            language="python"
            text={ CODE_BLOCKS.SKIMS_TEST_METHOD }
            theme={{ mode }}
            showLineNumbers={true}
          />
        </li>
        <li><p>You should have received an email with a screenshot of the page.</p>
        </li>
        <li><p>Change it to 
<code>if not not_in_stock:</code>
 since that&#39;s what we really want.</p>
        </li>
      </ol>
      <CodeBlock
        language="python"
        text={ CODE_BLOCKS.SKIMS_IF_NOT_NOT }
        theme={{ mode }}
        showLineNumbers={true}
      />
      <h4 id="to-add-more-links-or-stores">To Add More Links or Stores</h4>
      <ul>
        <li><p>Create a new 
<code>store.txt</code>
 file and follow the steps above to create a new method to handle it.</p>
          <ul>
            <li><p>We need separate 
<code>store.txt</code>
 files because we have to handle different websites in different ways as you saw above for Lululemon, Everlane, and Skims</p>
            </li>
            <li><p>If you want more links for a certain store, you can put them on new lines in your 
<code>store.txt</code>
 file</p>
            </li>
            <li><p>For example 
<code>skims.txt</code>
</p>
              <CodeBlock
                language="text"
                text={ CODE_BLOCKS.SKIMS_LINKS }
                theme={{ mode }}
                showLineNumbers={true}
              />
            </li>
            <li><p>This line loops through each link within the text file and will email us separately for each item.</p>
              <CodeBlock
                language="text"
                text={ CODE_BLOCKS.FOR_LINK }
                theme={{ mode }}
                showLineNumbers={false}
              />
            </li>
          </ul>
        </li>
        <li><p>You can delete 
<code>everlane.txt</code>
, 
<code>lululemon.txt</code>
, 
<code>skims.txt</code>
 and their corresponding methods once you&#39;ve verified everything&#39;s working!</p>
        </li>
      </ul>
      <p>And now, you&#39;re actually <strong>done</strong>.</p>
      <p>It&#39;s been nice a long journey, my friends. If you got here, and you&#39;ve done it, <strong>congratulations</strong>! I know this was a lot but I hope you&#39;ve learned a thing or two and feel empowered to use your newfound knowledge to create more.</p>
      <p>Most importantly, I hope this helps you free up some time to be onto bigger and better things than repeatedly checking your favourite store&#39;s online website.</p>
      <p>There&#39;s some extra information below if you&#39;re interested as well. </p>
      <p>Let&#39;s embark on this mission to automate our worlds one script at a time. See you on the other side!</p>
      <p className="signature">Jiana</p>
      <h3 id="appendix">APPENDIX</h3>
      <h4 id="general">General</h4>
      <ul>
        <li><p>Anytime you make a code change, test it by running<sup><a href="#cliffnote-18">18</a></sup></p>
        </li>
        <li><p>On a 
<code>launchd</code>
 setup</p>
          <ul>
            <li>If your computer is off at the time the script is to run, it won&#39;t run until you&#39;ve started it up again. Mine has run even on sleep, but it&#39;s not always reliable</li>
          </ul>
        </li>
        <li><p>On a cron setup</p>
          <ul>
            <li>You&#39;ll need to use a <a href="https://linux.die.net/man/8/anacron">special type of cron</a> in order to mimic the run on startup functionality</li>
          </ul>
        </li>
        <li><p>If the website changes their layout, you may need to update and re-test your method in 
<code>back_in_stock.py</code>
﻿</p>
        </li>
      </ul>
      <h4 id="why-are-we-using-docker-">Why are we using Docker?</h4>
      <ul>
        <li>We&#39;re using Docker here because our program needs certain libraries (which are existing code that we can publicly use) in order to do certain things<ul>
            <li>For example, it uses Selenium to interact with the browser</li>
            <li>These libraries have numerous versions and requirements that need to be on the machine running the script</li>
          </ul>
        </li>
        <li>Docker makes it so that we can all easily use the same library versions, and won&#39;t run into trouble with these program &quot;prerequisites&quot;</li>
        <li>If we don&#39;t use Docker, it will be much harder to ensure your setup and my setup are exactly the same</li>
        <li>Docker gives us this ability because instead of us each having these &quot;prerequisites&quot; on our own machines, they are hosted on an external machine that we connect to through the internet, and our script is instead run there</li>
      </ul>
      <h4 id="experience-with-coding">Experience with Coding</h4>
      <h5 id="if-you-have-coding-experience-here-is-what-i-did-at-a-high-level-">If you have coding experience, here is what I did at a high level.</h5>
      <ol>
        <li>Create a new email with an app password to send notifications from (or use mine<sup><a href="#cliffnote-2">2</a></sup>)</li>
        <li>Use Python library Selenium to interact with the browser<ul>
            <li>Navigate to the link, click the necessary buttons on the page, and check if the add button is enabled (site-dependent)</li>
          </ul>
        </li>
        <li>Save screenshot and use 
<code>smtplib</code>
 to send the notification from our newly created email</li>
        <li>Run script everyday at indicated time via 
<code>launchd</code>
 (Mac). <em>I chose launchd so that if my computer was off at the time the script would have run, it will run on startup. You can use anacron or whatever you&#39;d like to do this on a different OS.</em></li>
      </ol>
      <h6 id="notes">Notes</h6>
      <ul>
        <li>I did this with Docker to make this easily distributable without having to get others to use a 
<code>virtualenv</code>
 with Python. I always have an annoying time with Python environment setups, so I felt it would be nice to use Docker here.<ul>
            <li>If you&#39;re using Docker also, you can take a look at some of the problems I ran into when my screenshots weren&#39;t saving to my local project folder</li>
          </ul>
        </li>
        <li>The rest of the tutorial can be broken down into six parts.<ol>
            <li>Modifying the code from my repository</li>
            <li>Testing the script</li>
            <li>Setting up the job</li>
            <li>Testing the job</li>
            <li>Tweaking the script for different online website layouts</li>
            <li>Debugging</li>
          </ol>
        </li>
      </ul>
      <h4 id="new-learners-with-coding">New Learners with Coding</h4>
      <h5 id="a-few-terms">A few terms</h5>
      <ul>
        <li>I use script and program interchangeably here</li>
        <li>When I say command, I am referring to an instruction that we give to our computer, usually via our terminals (which are the way we talk directly to our computer without a graphical user interface/GUI)</li>
        <li>$ means terminal prompt</li>
      </ul>
      <h4 id="the-helper-methods">The Helper Methods</h4>
      <p>If you&#39;re interested, here&#39;s more context on 
<code>prepare_email</code>
, 
<code>save_screenshot</code>
 and 
<code>send_email</code>
 methods.</p>
      <ul>
        <li><p>
<code>prepare_email</code>
 is a method that is already written for you in 
<code>back_in_stock.py</code>
 to pass to 
<code>send_email</code>
 </p>
          <ul>
            <li><p>All it needs is the link in order to work 
<code>prepare_email(link)</code>
</p>
              <CodeBlock
                language="python"
                text={ CODE_BLOCKS.PREPARE_EMAIL }
                theme={{ mode }}
                showLineNumbers={true}
              />
            </li>
          </ul>
        </li>
        <li><p>You can take a look at these methods within 
<code>helpers/web_helper_methods.py</code>
, but for your curiosity, I&#39;ve added some comments to explain these methods below</p>
          <CodeBlock
            language="python"
            text={ CODE_BLOCKS.SAVE_SCREENSHOT }
            theme={{ mode }}
            showLineNumbers={true}
          />
          <br/>
          <CodeBlock
            language="python"
            text={ CODE_BLOCKS.SEND_EMAIL }
            theme={{ mode }}
            showLineNumbers={true}
          />
        </li>
      </ul>
      <h4 id="learning-about-docker-volumes">Learning about Docker Volumes</h4>
      <p>The first time around I did this, the 
<code>screenshots</code>
 directory wasn&#39;t saving to my local folder, and this is how I found out the issue:</p>
      <ul>
        <li><p>I knew it had something to do with using Docker, because when I originally tried this without Docker, it worked no problem. Look <a href="#learning-about-docker-volumes">here</a> to find out what the issue was and why.</p>
        </li>
        <li><p>After doing some digging, I learned about <a href="https://docs.docker.com/storage/volumes/#start-a-service-with-volumes">Docker volumes</a>. I won&#39;t go into details because I&#39;m not an expert, but I essentially needed to map my Docker container&#39;s working directory to a directory on the host (my computer) in order to create the folder and save the files to my machine</p>
          <ul>
            <li>My S.O. knows a lot more about Docker than me, and he showed me when jumping into the Docker container (I didn&#39;t know I could do this before), the folder was there</li>
          </ul>
        </li>
        <li><p>This led to adding these lines to my 
<code>Dockerfile</code>
. I believe these tell Docker where on my local machine to map what the container is doing to.</p>
          <CodeBlock
            language="shell"
            text={ CODE_BLOCKS.VOLUME_WORKDIR }
            theme={{ mode }}
            showLineNumbers={true}
          />
        </li>
        <li><p>And thats how I found out I need to run my program using this command:</p>
          <CodeBlock
            language="shell"
            text={ CODE_BLOCKS.DOCK_RUN }
            theme={{ mode }}
            showLineNumbers={true}
          />
          <ul>
          <li>This maps my local folder (
<code>/Users/jianajavier/workspace/back_in_stock</code>
) to the volume Docker is using 
<code>/back_in_stock</code>
</li>
            <li>This is what allows me to save the screenshots (or any file I would want to save written by my program) on my computer</li>
            <li><em>Note</em>: I put all this in 
<code>commands.md</code>
 as a reminder</li>
          </ul>
        </li>
        <li><p>You likely will not have experienced this because I already put the commands in your Dockerfile and we&#39;ve been running this command to test all along</p>
        </li>
      </ul>
      <h4 id="debugging">Debugging</h4>
      <ul>
        <li><p>In order to see if I could actually get the colour button through the code, I added a breakpoint (a point where the code stops after we run it where we can interact with the code live) by inserting 
<code>pdb.set_trace()</code>
 where you want the program to stop</p>
          <CodeBlock
            language="python"
            text={ CODE_BLOCKS.SKIMS_DEBUG }
            theme={{ mode }}
            showLineNumbers={true}
          />
        </li>
        <li><p>Now I run in interactive mode:</p>
          <CodeBlock
            language="shell"
            text={ CODE_BLOCKS.RUN_INTERACTIVE }
            theme={{ mode }}
            showLineNumbers={false}
          />
        </li>
        <li><p>First let&#39;s see if we can get the element. I will enter part of the line that&#39;s about to run next in the console (indicated by 
<code>-&gt;</code>
) without the 
<code>color_button =</code>
 part (which saves the output to a variable) because I want to see the output on the screen.</p>
          <CodeBlock
            language="shell"
            text={ CODE_BLOCKS.SKIMS_PDB }
            theme={{ mode }}
            showLineNumbers={false}
          />
        </li>
        <li><p>Great, it returned a Selenium <strong>WebElement</strong>. Now I know I can find the color button on the page. I&#39;ll press 
<code>n</code>
 to execute the next line which will save the output</p>
          <CodeBlock
            language="shell"
            text={ CODE_BLOCKS.WEB_ELEMENT }
            theme={{ mode }}
            showLineNumbers={false}
          />
          <p>to the variable 
<code>color_button</code>
</p>
          <CodeBlock
            language="shell"
            text={ CODE_BLOCKS.COLOR_BUTTON }
            theme={{ mode }}
            showLineNumbers={false}
          />
        </li>
        <li><p>Great! Now we want to click 
<code>color_button</code>
. <a href="https://selenium-python.readthedocs.io/navigating.html">These</a> are all the ways I can interact with the page through Selenium. However, we&#39;ll just try to use 
<code>click()</code>
 for this purpose. Still in the debugger, let&#39;s try it.</p>
          <CodeBlock
            language="shell"
            text={ CODE_BLOCKS.COLOR_BUTTON_CLICK }
            theme={{ mode }}
            showLineNumbers={false}
          />
        </li>
        <li><p>You&#39;ll notice we get an error (If you don&#39;t get this error, it&#39;s okay, but you can still read on to learn how I solved for it if you&#39;d like)</p>
          <CodeBlock
            language="shell"
            text={ CODE_BLOCKS.DEBUG_ERROR }
            theme={{ mode }}
            showLineNumbers={false}
          />
        </li>
        <li><p>Hm. It says our element click was intercepted. Wonder what happened. Fortunately, we can use the 
<code>save_screenshot</code>
 method in our 
<code>helpers/web_helper_methods.py</code>
 to save a screenshot locally and see what the page looks like at this point in our program. Let&#39;s try it within the debugger.</p>
          <CodeBlock
            language="shell"
            text={ CODE_BLOCKS.PDB_SCREENSHOT }
            theme={{ mode }}
            showLineNumbers={false}
          />
        </li>
        <li><p>Cool. Looks like it saved. This should save to a directory called 
<code>screenshots</code>
 that will be created in our working directory (
<code>./back_in_stock/screenshots/</code>
).<sup><a href="#cliffnote-19">19</a></sup> Let&#39;s open the screenshot and take a look.</p>
        </li>
        <li><p>When we take a look at the screenshot, we can finally see what went wrong.</p>
          <p><img src="../images/back_in_stock_tutorial/back_in_stock_screenshot_2020-09-27 copy.png" alt="popup in the way"/></p>
        </li>
        <li><p>A popup got in the way!</p>
        </li>
        <li><p>So let&#39;s add error handling and screenshot saving and re-run the program. Don&#39;t forget to import the error so we can catch it properly.</p>
        </li>
      </ul>
      <CodeBlock
        language="python"
        text={ CODE_BLOCKS.CATCH_ERROR }
        theme={{ mode }}
        showLineNumbers={true}
      />
      <br/>
      <CodeBlock
        language="shell"
        text={ CODE_BLOCKS.RUN_TO_CATCH_ERROR }
        theme={{ mode }}
        showLineNumbers={false}
      />
      <ul>
        <li>This is similar to the Everlane website. There are a few ways to get around this, like clicking on anywhere else on the page, but I think the easiest is just to press 
<code>ESC</code>
 on the page first (like we did for Everlane)</li>
      </ul>
      <CodeBlock
        language="python"
        text={ CODE_BLOCKS.PRESS_ESC }
        theme={{ mode }}
        showLineNumbers={false}
      />
        <ul>
        <li>So now, our code for 
<code>skims</code>
 should look like this</li>
      </ul>
      <CodeBlock
        language="python"
        text={ CODE_BLOCKS.NEW_SKIMS_CODE }
        theme={{ mode }}
        showLineNumbers={true}
      />
      <ul>
        <li>What we did:<ul>
            <li>Put the xpath in a variable because it was looking a bit cluttered</li>
            <li>Added the 
<code>ESC</code>
 button press</li>
            <li>Added a line to print &#39;Success&#39;</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li><p>When we run it again, let&#39;s see if we get a &#39;Success&#39; message which will tell us if we have successfully clicked and selected the color button</p>
          <CodeBlock
            language="shell"
            text={ CODE_BLOCKS.RUN_FOR_SUCCESS }
            theme={{ mode }}
            showLineNumbers={false}
          />
        </li>
        <li>
          <p>Woot woot!</p>
        </li>
      </ul>
      <h4 id="cliffnotes">Cliffnotes</h4>
      <ol>
        <li><p id='cliffnote-1'>I don&#39;t know if this will work the exact same with Windows or Linux. I think it will because we&#39;ll be using Docker but I give no guarantees. I&#39;ll update this once I&#39;ve tested with those machines.</p></li>
        <li><p id='cliffnote-2'>If you really don&#39;t want to create a new email address, <a href="https://github.com/jianajavier/dockpylenium">you can use the creds from here.</a></p></li>
        <li><p id='cliffnote-3'>This is taking a folder I&#39;ve uploaded (onto my github) and downloading it into a folder on your computer.</p></li>
        <li><p id='cliffnote-4'>Constants are variables in the code that should not change when the code is run.</p></li>
        <li><p id='cliffnote-5'>You may have to <a href="#tweaking-back_in_stock-py-for-an-online-item-that-contains-details-in-link">tweak</a> 
<code>back_in_stock.py</code>
 to find the correct elements on the page if you change to a link that has a slightly different layout.</p></li>
        <li><p id="cliffnote-6">Docker build meaning we are make sure we have all the necessary prerequisites to run the code</p></li>
        <li><p id="cliffnote-7">Docker run to actually execute the code on the docker container (the machine that we&#39;re running our code on)</p></li>
        <li><p id="cliffnote-8">For example, on my computer, mine is: 
<code>/Users/jianajavier/workspace/back_in_stock/logs/</code>
</p></li>
        <li><p id="cliffnote-9">An alias is like a shortcut for another command</p></li>
        <li><p id="cliffnote-10">If you write another script, you can use this same command and just replace 
<code>back_in_stock</code>
 with whatever you named the 
<code>.plist</code>
 file. Example: (
<code>local.cool_thing_to_do.plist</code>
)</p>
          <CodeBlock
            language="shell"
            text={ CODE_BLOCKS.ALIAS }
            theme={{ mode }}
            showLineNumbers={false}
          />
        </li>
        <li><p id="cliffnote-11">If it&#39;s your first time calling this, you may get an error that says unrecognized job, but don&#39;t worry, this is because it tried to unload first and then reload, but we didn&#39;t have anything to unload at first.</p></li>
        <li><p id="cliffnote-12">Python code that begins with 
<code>#</code>
 are comments in the code and are not executed when the code is run. You don&#39;t need to add this when you&#39;re following along with the code.</p>
          <CodeBlock
            language="python"
            text={ CODE_BLOCKS.COMMENT }
            theme={{ mode }}
            showLineNumbers={false}
          />
        </li>
        <li><p id="cliffnote-13">Selenium is the library that allows us to interact with the browser through our Python code.</p></li>
        <li><p id="cliffnote-14"><a href="https://selenium-python.readthedocs.io/locating-elements.html">Here</a> are all the things we can <strong>find by</strong> using selenium.</p></li>
        <li><p id="cliffnote-15">Note there are no colour-defining classes for us to use to find by class like the Lululemon example</p></li>
        <li><p id="cliffnote-16">This uses the absolute xpath. If the page changes, you may have to look up the xpath again.</p></li>
        <li><p id="cliffnote-17"> I don&#39;t just come up with this code out of nowhere. Below are the steps I take. For an in depth tutorial, see <a href="debugging">testing your code</a>)</p>
          <ol>
            <li><p>Inserting a breakpoint where I want to add the new code.</p></li>
            <li><p>Looking stuff up online like <strong>Selenium python find by value</strong> and <strong>Selenium python get text from element</strong></p>
            </li>
            <li><p id="cliffnote-x">Running the program in interactive mode and experiment with the suggestions I found online to fit my needs</p>
              <CodeBlock
                language="shell"
                text={ CODE_BLOCKS.DOCKER_PDB }
                theme={{ mode }}
                showLineNumbers={false}
              />
            </li>
          </ol>
        </li>
        <li><p id="cliffnote-18">When I say &quot;Test&quot; I am referring to running the code via the commands:</p>
          <ul>
            <li>If you are debugging (have a 
<code>pdb.set_trace()</code>
 in your code):
              <CodeBlock
                language="shell"
                text={ CODE_BLOCKS.DOCKER_PDB }
                theme={{ mode }}
                showLineNumbers={false}
              />
            </li>
            <li>If you are not debugging:
              <CodeBlock
                language="shell"
                text={ CODE_BLOCKS.DOCKER_NO_PDB }
                theme={{ mode }}
                showLineNumbers={false}
              />
            </li>
          </ul>
        </li>
        <li><p id="cliffnote-19">See <a href="#learning-about-docker-volumes">Learning about Docker Volumes</a> to learn about the issues I ran into when running this.</p></li>
      </ol>
      <style jsx>{`
        .back-in-stock
        input,
        .back-in-stock
        textarea,
        .back-in-stock
        select,
        .back-in-stock
        pre,
        .back-in-stock
        blockquote,
        .back-in-stock
        figure,
        .back-in-stock
        table,
        .back-in-stock
        p,
        .back-in-stock
        dl,
        .back-in-stock
        form,
        .back-in-stock
        .video-container,
        .back-in-stock
        .ss-custom-select {
          font-family: "DM Sans", sans-serif;
          font-size: 0.9em;
          margin-bottom: 1rem;
        }

        .dm-sans p, .dm-sans h2, .dm-sans h3, .dm-sans h4, .dm-sans h5, .dm-sans h6, .dm-sans .h1, .dm-sans .h2, .dm-sans .h3, .dm-sans .h4, .dm-sans .h5, .dm-sans .h6, .dm-sans em, .dm-sans strong, .dm-sans li {
          font-family: "DM Sans", sans-serif;
        }

        .dm-sans h2, .dm-sans h3, .dm-sans h4, .dm-sans h5, .dm-sans h6, .dm-sans .h1, .dm-sans .h2, .dm-sans .h3, .dm-sans .h4, .dm-sans .h5, .dm-sans .h6, .dm-sans strong {
          font-weight: 600;
        }

        .dm-sans * p, .dm-sans * p strong, .dm-sans * li {
          font-size: 0.9em;
        }

        #things-you-ll-need, #general {
          margin-top: 0rem;
        }

        img {
          width: 20%;
        }
    `}</style>
    </>

  return (
    <>
      <HeadTag pageTitle={`JIANA - ${postData.title}`}/>
      <Header/>
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <BlogPostHeader title={postData.title} date={postData.date} readTime={postData.readTime} subtitle={postData.subtitle}/>
              { post }
            </div>
          </div>
        </div>
      </div>
      <SubscribeSection/>
      <Loader/>
      <Footer/>
    </>
  )
}
