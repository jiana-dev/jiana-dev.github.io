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
    <div className="dm-sans back-in-stock">
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
        <li><p><strong>Docker</strong></p>
          <ul>
            <li><p><a href="https://docs.docker.com/docker-for-mac/install/">https://docs.docker.com/docker-for-mac/install/</a> <strong>OR</strong></p>
            </li>
            <li><p>Install with Homebrew (a <a href="https://en.wikipedia.org/wiki/Package_manager">package manager</a> for MacOS)</p>
              <CodeBlock
                language="shell"
                text={ CODE_BLOCKS.BREW }
                theme={{ mode }}
              />
            </li>
          </ul>
        </li>
        <li><p><strong>Email address</strong> to send your main email address the notification<sup><a href="#cliffnote-2">2</a></sup></p>
          <ul>
            <li>Call it yournamescripts@gmail.com, for example</li>
            <li><a href="https://support.google.com/accounts/answer/185833?hl=en">Create an app password</a> to use for the script</li>
          </ul>
        </li>
        <li><p><strong>Code</strong></p>
          <ul>
            <li>
              <p> 
                <Code language="text" text="git clone" />
                <code>git clone</code>
                <sup><a href="#cliffnote-3">3</a></sup> my <a href="https://github.com/jianajavier/back_in_stock">back in stock repository</a>
                somewhere on your computer. I have it in a folder called <code>workspace</code> in my home directory.
              </p>
              <CodeBlock
                language="shell"
                text={ CODE_BLOCKS.CLONE }
                theme={{ mode }}
              />
            </li>
          </ul>
        </li>
      </ol>
      <h4 id="modifying-the-code">Modifying the Code</h4>
      <ol>
        <li><p>Change the email and password constants<sup><a href="#cliffnote-4">4</a></sup> in the code. </p>
          <ol>
            <li><p>Open the <code>back_in_stock/helpers/web_helper_methods.py</code> file</p>
            </li>
            <li><p>Change the constants in <code>helpers/web_helper_methods.py</code></p>
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
        <li><p>Verify that the example item in the link in <code>everlane.txt</code> is <strong>in stock</strong></p>
          <ul>
            <li>If it isn&#39;t, find a similar item (on the same site) that is in stock and change the URL to that item.<sup><a href="#cliffnote-5">5</a></sup></li>
          </ul>
        </li>
        <li><p>Ensure docker is running. If you&#39;re on a Mac, you&#39;ll most likely see the Docker icon in your menu bar.</p>
          <p><img src="../images/back_in_stock_tutorial/docker_running.png" alt="docker_running"/></p>
          <p> You can also make sure by running this and making sure you don&#39;t get an error.</p>
          <pre><code><span className="hljs-variable">$ </span>docker ps
        </code></pre></li>
        <li><p>Make sure you&#39;re in the <code>back_in_stock</code> directory in the terminal (<code>cd</code> to the directory) and build<sup><a href="#cliffnote-6">6</a></sup> the container,</p>
          <pre><code>$ cd ~/workspace/<span className="hljs-keyword">back_in_stock
    </span>$ docker <span className="hljs-keyword">build </span>-t <span className="hljs-keyword">back_in_stock </span>.
          </code></pre><p>and run<sup><a href="#cliffnote-7">7</a></sup> the script</p>
          <pre><code>$ docker run -v <span className="hljs-regexp">/Users/</span>jianajavier<span className="hljs-regexp">/workspace/</span><span className="hljs-string">back_in_stock:</span>/back_in_stock back_in_stock
        </code></pre></li>
        <li><p>You should have received a <strong>Back in Stock!</strong> email at your <code>TO_EMAIL</code></p>
        </li>
      </ol>
      <h4 id="setting-up-the-job">Setting up the job</h4>
      <ol>
        <li><p>You can either set this up via cron or (as I have it) a Launch Daemon on MacOS</p>
          <ul>
            <li>Create this file: <code>/Library/LaunchDaemons/local.back_in_stock.plist</code></li>
          </ul>
          <pre><code className="lang-xml"><span className="php"><span className="hljs-meta">&lt;?</span>xml version=<span className="hljs-string">"1.0"</span> encoding=<span className="hljs-string">"UTF-8"</span><span className="hljs-meta">?&gt;</span></span>
    <span className="hljs-meta">&lt;!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
      "http://www.apple.com/DTDs/PropertyList-1.0.dtd"&gt;</span>
    <span className="hljs-tag">&lt;<span className="hljs-name">plist</span> <span className="hljs-attr">version</span>=<span className="hljs-string">"1.0"</span>&gt;</span>
    <span className="hljs-tag">&lt;<span className="hljs-name">dict</span>&gt;</span>
        <span className="hljs-tag">&lt;<span className="hljs-name">key</span>&gt;</span>Label<span className="hljs-tag">&lt;/<span className="hljs-name">key</span>&gt;</span>
        <span className="hljs-tag">&lt;<span className="hljs-name">string</span>&gt;</span>local.back_in_stock<span className="hljs-tag">&lt;/<span className="hljs-name">string</span>&gt;</span>
        <span className="hljs-tag">&lt;<span className="hljs-name">key</span>&gt;</span>ProgramArguments<span className="hljs-tag">&lt;/<span className="hljs-name">key</span>&gt;</span>
        <span className="hljs-tag">&lt;<span className="hljs-name">array</span>&gt;</span>
            <span className="hljs-tag">&lt;<span className="hljs-name">string</span>&gt;</span>/usr/local/bin/docker<span className="hljs-tag">&lt;/<span className="hljs-name">string</span>&gt;</span>
            <span className="hljs-tag">&lt;<span className="hljs-name">string</span>&gt;</span>run<span className="hljs-tag">&lt;/<span className="hljs-name">string</span>&gt;</span>
            <span className="hljs-tag">&lt;<span className="hljs-name">string</span>&gt;</span>-v<span className="hljs-tag">&lt;/<span className="hljs-name">string</span>&gt;</span>
            <span className="hljs-tag">&lt;<span className="hljs-name">string</span>&gt;</span>/your/absolute/path/back_in_stock:/back_in_stock<span className="hljs-tag">&lt;/<span className="hljs-name">string</span>&gt;</span>
            <span className="hljs-tag">&lt;<span className="hljs-name">string</span>&gt;</span>back_in_stock<span className="hljs-tag">&lt;/<span className="hljs-name">string</span>&gt;</span>
        <span className="hljs-tag">&lt;/<span className="hljs-name">array</span>&gt;</span>
        <span className="hljs-tag">&lt;<span className="hljs-name">key</span>&gt;</span>WorkingDirectory<span className="hljs-tag">&lt;/<span className="hljs-name">key</span>&gt;</span>
        <span className="hljs-tag">&lt;<span className="hljs-name">string</span>&gt;</span>/your/absolute/path/back_in_stock<span className="hljs-tag">&lt;/<span className="hljs-name">string</span>&gt;</span>
        <span className="hljs-tag">&lt;<span className="hljs-name">key</span>&gt;</span>StartCalendarInterval<span className="hljs-tag">&lt;/<span className="hljs-name">key</span>&gt;</span>
        <span className="hljs-tag">&lt;<span className="hljs-name">dict</span>&gt;</span>
            <span className="hljs-tag">&lt;<span className="hljs-name">key</span>&gt;</span>Hour<span className="hljs-tag">&lt;/<span className="hljs-name">key</span>&gt;</span>
            <span className="hljs-tag">&lt;<span className="hljs-name">integer</span>&gt;</span>22<span className="hljs-tag">&lt;/<span className="hljs-name">integer</span>&gt;</span>
            <span className="hljs-tag">&lt;<span className="hljs-name">key</span>&gt;</span>Minute<span className="hljs-tag">&lt;/<span className="hljs-name">key</span>&gt;</span>
            <span className="hljs-tag">&lt;<span className="hljs-name">integer</span>&gt;</span>24<span className="hljs-tag">&lt;/<span className="hljs-name">integer</span>&gt;</span>
        <span className="hljs-tag">&lt;/<span className="hljs-name">dict</span>&gt;</span>
        <span className="hljs-tag">&lt;<span className="hljs-name">key</span>&gt;</span>StandardErrorPath<span className="hljs-tag">&lt;/<span className="hljs-name">key</span>&gt;</span>
        <span className="hljs-tag">&lt;<span className="hljs-name">string</span>&gt;</span>/your/absolute/path/back_in_stock/logs/back_in_stock.err<span className="hljs-tag">&lt;/<span className="hljs-name">string</span>&gt;</span>
        <span className="hljs-tag">&lt;<span className="hljs-name">key</span>&gt;</span>StandardOutPath<span className="hljs-tag">&lt;/<span className="hljs-name">key</span>&gt;</span>
        <span className="hljs-tag">&lt;<span className="hljs-name">string</span>&gt;</span>/your/absolute/path/back_in_stock/logs/back_in_stock.out<span className="hljs-tag">&lt;/<span className="hljs-name">string</span>&gt;</span>
    <span className="hljs-tag">&lt;/<span className="hljs-name">dict</span>&gt;</span>
    <span className="hljs-tag">&lt;/<span className="hljs-name">plist</span>&gt;</span>
          </code></pre>
          <ul>
            <li><p>This file is used to tell our computer when to run our program</p>
              <ul>
                <li>It says to run our program at 10:24PM every day</li>
                <li>It redirects <strong>output</strong> or <strong>errors</strong> to the files in <code>/your/absolute/path/back_in_stock/logs/</code>. Change this to be the absolute path where you put your <code>back_in_stock</code> code.<sup><a href="#cliffnote-8">8</a></sup></li>
              </ul>
            </li>
            <li><p>Now I need to <code>load</code> this configuration file using <code>launchctl</code>. </p>
              <pre><code>$ launchctl load -w <span className="hljs-regexp">/Library/</span>LaunchDaemons<span className="hljs-regexp">/$(ls /</span>Library<span className="hljs-regexp">/LaunchDaemons/</span> | <span className="hljs-keyword">grep</span> back_in_stock)<span className="hljs-string">'</span>
              </code></pre><ul>
                <li><p>Anytime I make a change to this configuration file (<code>/Library/LaunchDaemons/local.back_in_stock.plist</code>), I need to <code>unload</code> and then <code>load</code> it again. </p>
                </li>
                <li><p>I set up an alias<sup><a href="#cliffnote-9">9</a></sup> to run this more easily. This means when I enter the command <code>reload_back_in_stock</code>, any changes I make to the launch daemon will be applied.<sup><a href="#cliffnote-10">10</a></sup></p>
                  <pre><code>$ alias reload_back_in_stock='launchctl unload -w /<span className="hljs-keyword">Library</span>/LaunchDaemons/$(ls /<span className="hljs-keyword">Library</span>/LaunchDaemons/ | <span className="hljs-type">grep</span> back_in_stock) &amp;&amp; launchctl load -w /<span className="hljs-keyword">Library</span>/LaunchDaemons/$(ls /<span className="hljs-keyword">Library</span>/LaunchDaemons/ | <span className="hljs-type">grep</span> back_in_stock)'
    $ reload_back_in_stock
                </code></pre></li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
      <h4 id="testing-the-job">Testing the job</h4>
      <ol>
        <li><p>Set up the script to run a few minutes from the current time to test</p>
          <pre><code className="lang-xml">    <span className="hljs-tag">&lt;<span className="hljs-name">dict</span>&gt;</span>
            <span className="hljs-tag">&lt;<span className="hljs-name">key</span>&gt;</span>Hour<span className="hljs-tag">&lt;/<span className="hljs-name">key</span>&gt;</span>
            <span className="hljs-tag">&lt;<span className="hljs-name">integer</span>&gt;</span>21<span className="hljs-tag">&lt;/<span className="hljs-name">integer</span>&gt;</span>
            <span className="hljs-tag">&lt;<span className="hljs-name">key</span>&gt;</span>Minute<span className="hljs-tag">&lt;/<span className="hljs-name">key</span>&gt;</span>
            <span className="hljs-tag">&lt;<span className="hljs-name">integer</span>&gt;</span>03<span className="hljs-tag">&lt;/<span className="hljs-name">integer</span>&gt;</span>
        <span className="hljs-tag">&lt;/<span className="hljs-name">dict</span>&gt;</span>
          </code></pre>
        </li>
        <li><p>Make sure the alias from <a href="#setting-up-the-job">the previous step</a> is set up, and then reload.<sup><a href="#cliffnote-11">11</a></sup></p>
          <pre><code><span className="hljs-variable">$ </span>reload_back_in_stock
        </code></pre></li>
        <li><p>See the e-mail in your inbox (if it worked)</p>
          <ul>
            <li>If it didn&#39;t, <a href="mailto:jiana.dev@gmail.com">shoot me a message</a> so we can try troubleshooting together!</li>
          </ul>
        </li>
      </ol>
      <p><strong>Now you&#39;re all set up to add your own stores and links!</strong></p>
      <h3 id="adding-your-own-stores-and-links">Adding your own stores and links</h3>
      <p> This will differ from website to website. I&#39;ll give you the general toolbox that should get you where you want to be, but if you still run into trouble and would really like to do this, <a href="mailto:jiana.dev@gmail.com">message me</a>, and I&#39;ll do my best to help you out!</p>
      <p>I plan to create a video to demonstrate this better, so let me know if you think that would be helpful!</p>
      <h4 id="tweaking-back_in_stock-py-for-an-online-item-that-contains-details-in-link">Tweaking <code>back_in_stock.py</code> for an online item that contains details in link</h4>
      <p>I&#39;ve been eyeing these <a href="https://shop.lululemon.com/p/women-pants/Align-Pant-Tall/_/prod9410008?color=26083&amp;sz=4">Lululemon leggings</a> for months now and they just never seem to come back in stock.</p>
      <p>Within this link, you can see <code>color=26083&amp;sz=4</code>, which means I don&#39;t have to click anything in the browser to specify my colour or size, it&#39;s contained within the link itself.</p>
      <p>This is the easiest type of online item because all we&#39;ll need to do is check if the &quot;Add to Bag&quot; button is enabled.</p>
      <h5 id="steps">Steps</h5>
      <ol>
        <li><p>Put the link in a text file. Here I am going into my <code>back_in_stock</code> directory and putting the link in a text file called <code>lululemon.txt</code>.</p>
          <pre><code>$ cd ~<span className="hljs-regexp">/workspace/back</span>_in_stock
    $ echo <span className="hljs-string">'https://shop.lululemon.com/p/women-pants/Align-Pant-Tall/_/prod9410008?color=26083&amp;sz=4'</span> <span className="hljs-meta">&gt;&gt; </span>lululemon.txt
          </code></pre><p><code>lululemon.txt</code> file:</p>
          <pre><code>https:<span className="hljs-regexp">//</span>shop.lululemon.com<span className="hljs-regexp">/p/</span>women-pants<span className="hljs-regexp">/Align-Pant-Tall/</span>_<span className="hljs-regexp">/prod9410008?color=26083&amp;sz=4</span>
        </code></pre></li>
        <li><p>Add a method to <code>back_in_stock.py</code> to use <code>lululemon.txt</code><sup><a href="#cliffnote-12">12</a></sup></p>
          <pre><code className="lang-python">TODAYS_DATE = datetime.today().strftime(<span className="hljs-string">'%Y-%m-%d'</span>)
    SCREENSHOT_NAME = <span className="hljs-string">"back_in_stock_screenshot_%s.png"</span> % TODAYS_DATE

    <span className="hljs-comment"># This is the everlane method</span>
    <span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">everlane</span><span className="hljs-params">(driver)</span></span>:
        f = open(<span className="hljs-string">"everlane.txt"</span>, <span className="hljs-string">"r"</span>)
        <span className="hljs-comment">### ...</span>

    <span className="hljs-comment"># Our new lululemon method</span>
    <span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">lululemon</span><span className="hljs-params">(driver)</span></span>:
        f = open(<span className="hljs-string">"lululemon.txt"</span>, <span className="hljs-string">"r"</span>)      <span className="hljs-comment"># This gets the text file</span>
        <span className="hljs-keyword">for</span> link <span className="hljs-keyword">in</span> <span className="hljs-symbol">f:</span>                      <span className="hljs-comment"># Loop through each link in the text file (we are starting with one)</span>
              link = link.strip(<span className="hljs-string">"\\n"</span>)        <span className="hljs-comment"># Remove the new line character at the end of each line</span>
            driver.get(link)                 <span className="hljs-comment"># Use the selenium web driver to get the link</span>
          </code></pre>
        </li>
        <li><p>Get the add button</p>
          <li><p>Go onto the <a href="https://shop.lululemon.com/p/women-pants/Align-Pant-Tall/_/prod9410008?color=26083&amp;sz=4">Lululemon page</a>), right-click on the <strong>Add to Bag</strong> button and click <strong>Inspect</strong>. This will show you the page&#39;s source code/html. We want to look for the html that makes up the <strong>Add to Bag</strong> button</p>
            <p>In our case, the html looks like this:</p>
            <pre><code className="lang-html">&lt;button <span className="hljs-keyword">class</span>=<span className="hljs-string">"button-1xp0M lll-text-button add-to-bag buttonPrimary-2q4bX"</span> <span className="hljs-class"><span className="hljs-keyword">type</span></span>=<span className="hljs-string">"button"</span> data-lulu-track=<span className="hljs-string">"pdp-add-to-bag-regular-enabled"</span>&gt;Add <span className="hljs-keyword">to</span> Bag&lt;/button&gt;
            </code></pre>
            <p>How I read the above HTML:</p>
            <ul>
              <li>The <strong>Add to Bag</strong> button is a <code>button</code> <strong><em>element</em></strong> with<ul>
                  <li><strong><em>classes</em></strong>: <code>button-1xp0M, lll-text-button, add-to-bag</code> , and <code>buttonPrimary-2q4bX</code></li>
                  <li><strong><em>type</em></strong>: <code>button</code></li>
                  <li><strong><em>data attribute</em></strong>: <code>data-lulu-track</code> with value <code>&quot;pdp-add-to-bag-regular-enabled&quot;</code></li>
                </ul>
              </li>
            </ul>
            <p>All of these <strong><em>classes</em></strong>:</p>
            <pre><code>button-1xp0M lll-text-button<span className="hljs-built_in"> add-to-bag </span>buttonPrimary-2q4bX
            </code></pre><p>are names I can use to find this element in my program. </p>
            <p>My intuition tells me that other buttons on the page are likely to share some of the other classes on this button (I.e. <code>button-1xp0M</code> or <code>lll-text-button</code>), since classes can determine common elements like styling and positioning.</p>
            <p>I aim to choose the one most specific to the <strong>Add to Bag</strong> button. In this case, that will be the <code>add-to-bag</code> class.</p>
            <p>This tells me that in my script, I can use Selenium<sup><a href="#cliffnote-13">13</a></sup> to find the button <em>element</em> by it&#39;s <a href="https://selenium-python.readthedocs.io/locating-elements.html#locating-elements-by-class-name">class name</a>.<sup><a href="#cliffnote-14">14</a></sup></p>
            <p>I&#39;ll be using this method:</p>
            <pre><code className="lang-python"><span className="hljs-function"><span className="hljs-title">find_element_by_class_name</span><span className="hljs-params">(<span className="hljs-string">'add-to-bag'</span>)</span></span>
            </code></pre>
          </li>
        </li>
        <li><p>Add the line to <code>back_in_stock.py</code>. I also included adding error handling so our program won&#39;t crash if it can&#39;t find the button.</p>
          <pre><code className="lang-python"><span className="hljs-comment"># Our new lululemon method</span>
    <span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">lululemon</span><span className="hljs-params">(driver)</span>:</span>
        f = open(<span className="hljs-string">"lululemon.txt"</span>, <span className="hljs-string">"r"</span>)
        <span className="hljs-keyword">for</span> link <span className="hljs-keyword">in</span> f:
              link = link.strip(<span className="hljs-string">"\\n"</span>)
            driver.get(link)

            <span className="hljs-keyword">try</span>:
                add_button = driver.find_element_by_class_name(<span className="hljs-string">'add-to-bag'</span>) <span className="hljs-comment"># Find by class name</span>
            <span className="hljs-keyword">except</span> NoSuchElementException: <span className="hljs-comment"># Error handling </span>
                <span className="hljs-keyword">pass</span>
          </code></pre>
        </li>
        <li><p>Look at what distinguishes an out of stock page from a back in stock page</p>
          <ul>
            <li>Find an item on the site that is <strong>in stock</strong> to confirm that the only difference is that the <strong>Add to Bag</strong> button is enabled</li>
          </ul>
        </li>
        <li><p>Now that we&#39;ve found the add button element, let&#39;s check if the add button <a href="https://selenium-python.readthedocs.io/api.html#selenium.webdriver.remote.webelement.WebElement.is_enabled">is enabled</a> through the code:</p>
          <pre><code className="lang-python"><span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">lululemon</span><span className="hljs-params">(driver)</span>:</span>
        f = open(<span className="hljs-string">"lululemon.txt"</span>, <span className="hljs-string">"r"</span>)
        <span className="hljs-keyword">for</span> link <span className="hljs-keyword">in</span> f:
              link = link.strip(<span className="hljs-string">"\\n"</span>)
            driver.get(link)

            <span className="hljs-keyword">try</span>:
                add_button = driver.find_element_by_class_name(<span className="hljs-string">'add-to-bag'</span>)

                <span className="hljs-keyword">if</span> add_button.is_enabled(): <span className="hljs-comment"># Check if enabled</span>
                    <span className="hljs-comment"># This is where we will want to save a screenshot and email ourselves</span>

            <span className="hljs-keyword">except</span> NoSuchElementException:
                <span className="hljs-keyword">pass</span>
          </code></pre>
        </li>
        <li><p>Use methods <code>save_screenshot</code> and <code>send_email</code> from <code>helpers/web_helper_methods.py</code> to save the screenshot and email your <code>TO_EMAIL</code>. This will be a common step among all websites. This tells our program to save a screenshot and send us an email if the <strong>Add Button</strong> is enabled.</p>
          <pre><code className="lang-python">def lululemon(driver):
        f = open(<span className="hljs-string">"lululemon.txt"</span>, <span className="hljs-string">"r"</span>)
        <span className="hljs-keyword">for</span> link in f:
              link = link.strip(<span className="hljs-string">"\\n"</span>)
            driver.<span className="hljs-keyword">get</span>(link)

            <span className="hljs-keyword">try</span>:
                add_button = driver.find_element_by_class_name('add-to-bag')

                <span className="hljs-keyword">if</span> add_button.is_enabled():
                  save_screenshot(driver, SCREENSHOT_NAME)
                  send_email(prepare_email(link))

            except NoSuchElementException:
                pass
          </code></pre>
        </li>
        <li><p>Call your new method in the <strong>main</strong> method of the program.</p>
          <pre><code className="lang-python">def main(debug):
        driver = initialize_driver(debug)
        everlane(driver)
        lululemon(driver)
          </code></pre>
        </li>
        <li><p>Test<sup><a href="#cliffnote-18">18</a></sup> your method. Change the condition by adding <code>not</code> since the item is not in stock and you just want to test the code.</p>
          <pre><code className="lang-python">def lululemon(driver):
        f = open(<span className="hljs-string">"lululemon.txt"</span>, <span className="hljs-string">"r"</span>)
        <span className="hljs-keyword">for</span> link in f:
              link = link.strip(<span className="hljs-string">"\\n"</span>)
            driver.<span className="hljs-keyword">get</span>(link)

            <span className="hljs-keyword">try</span>:
                add_button = driver.find_element_by_class_name('add-to-bag')

                <span className="hljs-keyword">if</span> not add_button.is_enabled(): # Change to not <span className="hljs-keyword">for</span> testing
                  save_screenshot(driver, SCREENSHOT_NAME)
                  send_email(prepare_email(link))

            except NoSuchElementException:
                pass
          </code></pre>
        </li>
        <li><p>Run the code. You should receive an email.</p>
          <pre><code>$ docker run -v <span className="hljs-regexp">/Users/</span>jianajavier<span className="hljs-regexp">/workspace/</span><span className="hljs-string">back_in_stock:</span>/back_in_stock back_in_stock
        </code></pre></li>
      </ol>
      <h4 id="tweaking-back_in_stock-py-for-an-online-item-that-does-not-contain-details-in-link">Tweaking <code>back_in_stock.py</code> for an online item that does not contain details in link</h4>
      <p>Now let&#39;s say I&#39;ve been monitoring <a href="https://skims.com/products/cozy-knit-short-robe-aqua">this robe</a> but everytime I want to purchase it, it&#39;s out of stock. This item differs from the previous one because I need to click the colour and size I want before checking if it&#39;s in stock.</p>
      <p><em>I know this website has a &quot;Join the Waitlist&quot; option but not all do, and this is more to demonstrate the concept for two different types of websites</em>.</p>
      <p><strong>UPDATE: Since I've written this, the website has changed so the code is outdated. You can still read on as it will give you versatility in handling different websites. The final code can be found in the back_in_stock_final.py file.</strong></p>
      <h5 id="steps">Steps</h5>
      <ol>
        <li><p>Put the link in a text file. Here I am going into my <code>back_in_stock</code> directory and putting the link in a text file called <code>skims.txt</code>.</p>
          <pre><code>$ cd ~<span className="hljs-regexp">/workspace/back</span>_in_stock
    $ echo <span className="hljs-string">'https://skims.com/products/cozy-knit-robe-stone'</span> <span className="hljs-meta">&gt;&gt; </span>skims.txt
          </code></pre><p><code>skims.txt</code></p>
          <pre><code>https:<span className="hljs-regexp">//</span>skims.com<span className="hljs-regexp">/products/</span>cozy-knit-robe-stone
        </code></pre></li>
        <li><p>Add a method to <code>back_in_stock.py</code> to handle <code>skims.txt</code></p>
          <pre><code className="lang-python">TODAYS_DATE = datetime.today().strftime(<span className="hljs-string">'%Y-%m-%d'</span>)
    SCREENSHOT_NAME = <span className="hljs-string">"back_in_stock_screenshot_%s.png"</span> % TODAYS_DATE

    <span className="hljs-comment"># This is the everlane method</span>
    <span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">everlane</span><span className="hljs-params">(driver)</span></span>:
        f = open(<span className="hljs-string">"everlane.txt"</span>, <span className="hljs-string">"r"</span>)
        <span className="hljs-comment">### ...</span>

    <span className="hljs-comment"># Our new skims method</span>
    <span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">skims</span><span className="hljs-params">(driver)</span></span>:
        f = open(<span className="hljs-string">"skims.txt"</span>, <span className="hljs-string">"r"</span>)                           <span className="hljs-comment"># This gets the text file</span>
        <span className="hljs-keyword">for</span> link <span className="hljs-keyword">in</span> <span className="hljs-symbol">f:</span>                                                  <span className="hljs-comment"># Loop through each link in the text file</span>
              link = link.strip(<span className="hljs-string">"\\n"</span>)                            <span className="hljs-comment"># Remove the new line character at the end of each line</span>
            driver.get(link)                                      <span className="hljs-comment"># Use the selenium web driver to get the link</span>
          </code></pre>
        </li>
        <li><p>In your main method, call the new method</p>
          <pre><code className="lang-python">def main(debug):
        driver = initialize_driver(debug)
        everlane(driver)
        lululemon(driver)
        skims(driver)
          </code></pre>
        </li>
        <li><p id="click-color-button">Now, on the website itself, I know the colour is in the link, but for demo purposes, I&#39;m going to choose a different colour. Let&#39;s find out how to identify the element to get it through Selenium.</p>
          <ol>
            <li><p>Right-click on the colour you want and click <strong>Inspect Element</strong>.</p>
              <p><img src="../images/back_in_stock_tutorial/Screen Shot 2020-09-25 at 8.36.48 PM.png" alt="inspect_element_right_click"/></p>
              <p>How I read the above HTML:</p>
              <ul>
                <li>The <strong>Color button</strong> is a <code>button</code> <strong><em>element</em></strong> that<ul>
                    <li>has <strong><em>classes</em></strong>: <code>config__color-btn, btn-icon, is-visible</code><sup><a href="#cliffnote-15">15</a></sup></li>
                    <li>contains a <code>span</code> <strong><em>element</em></strong> that has<ul>
                        <li><strong><em>classes</em></strong>: <code>config__color-inner</code>, <code>swatch</code>, and <code>is-visible</code></li>
                        <li><strong><em>data attributes</em></strong>:<ul>
                            <li><code>data-color</code> with value <code>&quot;STONE&quot;</code></li>
                            <li><code>data-content</code> with value <code>&quot;waitlist&quot;</code></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <p>What this tells me:</p>
              <ul>
                <li>There is no &quot;simple&quot; way to use Selenium&#39;s simplistic <code>find_by</code> methods like we did in the Lululemon example</li>
                <li><code>data-color</code> within the <code>span</code> is the defining attribute on the button</li>
              </ul>
            </li>
            <li><p>For now, we can use what I think is the simplest for this purpose (<a href="https://selenium-python.readthedocs.io/locating-elements.html#locating-by-xpath"><code>find_element_by_xpath</code></a>). Let&#39;s put this in our code first.</p>
              <pre>
                <code className="lang-python">def skims(driver):
                f = open(<span className="hljs-string">"skims.txt"</span>, <span className="hljs-string">"r"</span>)

                <span className="hljs-keyword">for</span> link in f:
                  link = link.strip(<span className="hljs-string">"\\n"</span>)
                  driver.<span className="hljs-keyword">get</span>(link)

                  color_button = driver.find_element_by_xpath(<span className="hljs-string">""</span>) # Add <span className="hljs-keyword">this</span> line
                    </code></pre>
                  </li>
                  <li><p>Then we need to <strong>get the absolute xpath of this element</strong>.</p>
                    <p><img src="../images/back_in_stock_tutorial/Screen Shot 2020-09-25 at 8.54.31 PM.png" alt="getting absolute xpath"/></p>
                  </li>
                  <li><p>Paste it within the empty quotes on the line we just added.<sup><a href="#cliffnote-16">16</a></sup></p>
                    <pre><code className="lang-python">def skims(driver):
              f = open(<span className="hljs-string">"skims.txt"</span>, <span className="hljs-string">"r"</span>)

              <span className="hljs-keyword">for</span> link in f:
                  link = link.strip(<span className="hljs-string">"\\n"</span>)
                  driver.<span className="hljs-keyword">get</span>(link)

                  color_button = driver.find_element_by_xpath(<span className="hljs-string">"/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"</span>)
              </code>
            </pre>
            </li>
            <li>
              <p>At this point, I would <a href="debugging">test my code</a>.</p>
            </li>
            <li>
              <p>During testing, I realized I was getting an error because a popup was showing up on the page, making me unable to click the color button. After testing, we end up with the code to click the color button and handle any errors if they come up.</p>
              <pre>
                <code className="lang-python">def skims(driver):
          f = open(<span className="hljs-string">"skims.txt"</span>, <span className="hljs-string">"r"</span>)

        <span className="hljs-keyword">for</span> link in f:
            link = link.strip(<span className="hljs-string">"\\n"</span>)
            driver.<span className="hljs-keyword">get</span>(link)

            color_button_xpath = <span className="hljs-string">"/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"</span>

            <span className="hljs-keyword">try</span>:
                ActionChains(driver).send_keys(Keys.ESCAPE).perform()

                color_button = driver.find_element_by_xpath(color_button_xpath)
                color_button.click()
            except ElementClickInterceptedException:
                save_screenshot(driver, SCREENSHOT_NAME, '<span className="hljs-keyword">error</span>')
                print('Error - saved screenshot')

            print('Success')
              </code></pre>
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
                <li>In fact, the &quot;Add to Bag&quot; button doubles as a &quot;Waitlist&quot; button if the item is sold out, so if we did the same thing and checked if the &quot;element with  <code>id=&quot;bagBtnProduct&quot;</code>&quot; <code>is_enabled?</code>, we would not be getting the correct answer</li>
                <li>We need a different approach for this one</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><p>First, let&#39;s get the Selenium code to click the dropdown. Repeat the <a href="#click-color-button">same steps</a> to click the color button. You should end up with something like this:</p>
          <pre><code className="lang-python">def skims(driver):
        f = open(<span className="hljs-string">"skims.txt"</span>, <span className="hljs-string">"r"</span>)

        <span className="hljs-keyword">for</span> link in f:
            link = link.strip(<span className="hljs-string">"\\n"</span>)
            driver.<span className="hljs-keyword">get</span>(link)

            color_button_xpath = <span className="hljs-string">"/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"</span>

            <span className="hljs-keyword">try</span>:
                ActionChains(driver).send_keys(Keys.ESCAPE).perform()

                color_button = driver.find_element_by_xpath(color_button_xpath)
                color_button.click()

                size_select = driver.find_element_by_id('Option1')
                size_select.click()

                save_screenshot(driver, SCREENSHOT_NAME)
            except ElementClickInterceptedException:
                save_screenshot(driver, SCREENSHOT_NAME, '<span className="hljs-keyword">error</span>')
                print('Error - saved screenshot')

            print('Success')
          </code></pre>
          <p>How I got here:</p>
          <ul>
            <li><p>When I inspected the element I saw that there was a much simpler way to get the size dropdown (by using the id <code>&quot;Option1&quot;</code>). I didn&#39;t need to use <code>xpath</code> here</p>
            </li>
            <li><p>I also added the <code>save_screenshot</code> method so I could quickly see if what I had was yielding what I wanted so far.</p>
            </li>
            <li><p>Run the program</p>
              <pre><code>$ docker run -v <span className="hljs-regexp">/Users/</span>jianajavier<span className="hljs-regexp">/workspace/</span><span className="hljs-string">back_in_stock:</span>/back_in_stock back_in_stock
            </code></pre></li>
            <li><p>Check the screenshot located in <code>/Users/jianajavier/workspace/back_in_stock/screenshots</code></p>
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
              <pre><code>&lt;option <span className="hljs-keyword">class</span>=<span className="hljs-string">""</span> <span className="hljs-keyword">value</span>=<span className="hljs-string">"L/XL"</span>&gt;L/XL - Waitlist&lt;/option&gt;
            </code></pre></li>
            <li><p>Through Selenium, let&#39;s get the element using xpath.</p>
              <pre><code className="lang-python">def skims(driver):
        f = open(<span className="hljs-string">"skims.txt"</span>, <span className="hljs-string">"r"</span>)

        <span className="hljs-keyword">for</span> link in f:
            link = link.strip(<span className="hljs-string">"\\n"</span>)
            driver.<span className="hljs-keyword">get</span>(link)

            color_button_xpath = <span className="hljs-string">"/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"</span>

            <span className="hljs-keyword">try</span>:
                ActionChains(driver).send_keys(Keys.ESCAPE).perform()

                color_button = driver.find_element_by_xpath(color_button_xpath)
                color_button.click()

                size_select = driver.find_element_by_id('Option1')
                size_select.click()

                size_option = driver.find_element_by_xpath(<span className="hljs-string">"//option[@value='L/XL']"</span>) # Add <span className="hljs-keyword">this</span> line

                save_screenshot(driver, SCREENSHOT_NAME)
            except ElementClickInterceptedException:
                save_screenshot(driver, SCREENSHOT_NAME, '<span className="hljs-keyword">error</span>')
                print('Error - saved screenshot')

            print('Success')
              </code></pre>
            </li>
            <li><p>And now we need to get it&#39;s text.<sup><a href="#cliffnote-17">17</a></sup></p>
              <pre><code className="lang-python">def skims(driver):
        f = open(<span className="hljs-string">"skims.txt"</span>, <span className="hljs-string">"r"</span>)

        <span className="hljs-keyword">for</span> link in f:
            link = link.strip(<span className="hljs-string">"\\n"</span>)
            driver.<span className="hljs-keyword">get</span>(link)

            color_button_xpath = <span className="hljs-string">"/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"</span>

            <span className="hljs-keyword">try</span>:
                ActionChains(driver).send_keys(Keys.ESCAPE).perform()

                color_button = driver.find_element_by_xpath(color_button_xpath)
                color_button.click()

                size_select = driver.find_element_by_id('Option1')
                size_select.click()

                size_option = driver.find_element_by_xpath(<span className="hljs-string">"//option[@value='L/XL']"</span>)
                size_text = size_option.text

                save_screenshot(driver, SCREENSHOT_NAME)
            except ElementClickInterceptedException:
                save_screenshot(driver, SCREENSHOT_NAME, '<span className="hljs-keyword">error</span>')
                print('Error - saved screenshot')

            print('Success')
              </code></pre>
            </li>
            <li><p>Let&#39;s check if <code>size_text</code> contains either &quot;Sold out&quot; or &quot;Waitlist&quot;</p>
              <pre><code className="lang-python">def skims(driver):
        f = <span className="hljs-built_in">open</span>(<span className="hljs-string">"skims.txt"</span>, <span className="hljs-string">"r"</span>)

        <span className="hljs-keyword">for</span> link <span className="hljs-keyword">in</span> f:
            link = link.strip(<span className="hljs-string">"\\n"</span>)
            driver.<span className="hljs-built_in">get</span>(link)

            color_button_xpath = <span className="hljs-string">"/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"</span>

            <span className="hljs-keyword">try</span>:
                ActionChains(driver).send_keys(Keys.ESCAPE).perform()

                color_button = driver.find_element_by_xpath(color_button_xpath)
                color_button.click()

                size_select = driver.find_element_by_id(<span className="hljs-string">'Option1'</span>)
                size_select.click()

                size_option = driver.find_element_by_xpath(<span className="hljs-string">"//option[@value='L/XL']"</span>)
                size_text = size_option.<span className="hljs-keyword">text</span>.<span className="hljs-built_in">lower</span>() <span className="hljs-comment"># We should do lower so we don't mismatch because of case</span>

                not_in_stock_words = [<span className="hljs-string">'waitlist'</span>, <span className="hljs-string">'sold out'</span>]
                not_in_stock = [<span className="hljs-keyword">item</span> <span className="hljs-keyword">for</span> <span className="hljs-keyword">item</span> <span className="hljs-keyword">in</span> not_in_stock_words <span className="hljs-keyword">if</span> <span className="hljs-keyword">item</span> <span className="hljs-keyword">in</span> size_text]

                <span className="hljs-keyword">if</span> not_in_stock:
                    <span className="hljs-comment"># Then the item is NOT in stock</span>

            except ElementClickInterceptedException:
                save_screenshot(driver, SCREENSHOT_NAME, <span className="hljs-string">'error'</span>)
                print(<span className="hljs-string">'Error - saved screenshot'</span>)

            print(<span className="hljs-string">'Success'</span>)
              </code></pre>
            </li>
          </ol>
        </li>
        <li id='#testing-skims'><p>Test to see if our email sending works when the item is not in stock.</p>
          <pre><code className="lang-python">def skims(<span className="hljs-built_in">driver</span>):
        f = open(<span className="hljs-string">"skims.txt"</span>, <span className="hljs-string">"r"</span>)

        <span className="hljs-keyword">for</span> link <span className="hljs-built_in">in</span> f:
            link = link.strip(<span className="hljs-string">"\\n"</span>)
            <span className="hljs-built_in">driver</span>.get(link)

            color_button_xpath = <span className="hljs-string">"/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"</span>

            <span className="hljs-keyword">try</span>:
                ActionChains(<span className="hljs-built_in">driver</span>).send_keys(Keys.ESCAPE).perform()

                color_button = <span className="hljs-built_in">driver</span>.find_element_by_xpath(color_button_xpath)
                color_button.click()

                size_select = <span className="hljs-built_in">driver</span>.find_element_by_id(<span className="hljs-string">'Option1'</span>)
                size_select.click()

                size_option = <span className="hljs-built_in">driver</span>.find_element_by_xpath(<span className="hljs-string">"//option[@value='L/XL']"</span>)
                size_text = size_option.<span className="hljs-built_in">text</span>.lower()

                not_in_stock_words = [<span className="hljs-string">'waitlist'</span>, <span className="hljs-string">'sold out'</span>]
                not_in_stock = [item <span className="hljs-keyword">for</span> item <span className="hljs-built_in">in</span> not_in_stock_words <span className="hljs-keyword">if</span> item <span className="hljs-built_in">in</span> size_text]

                <span className="hljs-keyword">if</span> not_in_stock:
                    save_screenshot(<span className="hljs-built_in">driver</span>, SCREENSHOT_NAME)
                    send_email(prepare_email(link))

            except ElementClickInterceptedException:
                save_screenshot(<span className="hljs-built_in">driver</span>, SCREENSHOT_NAME, <span className="hljs-string">'error'</span>)
                print(<span className="hljs-string">'Error - saved screenshot'</span>)

            print(<span className="hljs-string">'Success'</span>)
          </code></pre>
        </li>
        <li><p>You should have received an email with a screenshot of the page.</p>
        </li>
        <li><p>Change it to <code>if not not_in_stock:</code> since that&#39;s what we really want.</p>
        </li>
      </ol>
      <pre><code className="lang-python">def skims(<span className="hljs-built_in">driver</span>):
        f = open(<span className="hljs-string">"skims.txt"</span>, <span className="hljs-string">"r"</span>)

        <span className="hljs-keyword">for</span> link <span className="hljs-built_in">in</span> f:
            link = link.strip(<span className="hljs-string">"\\n"</span>)
            <span className="hljs-built_in">driver</span>.get(link)

            color_button_xpath = <span className="hljs-string">"/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"</span>

            <span className="hljs-keyword">try</span>:
                ActionChains(<span className="hljs-built_in">driver</span>).send_keys(Keys.ESCAPE).perform()

                color_button = <span className="hljs-built_in">driver</span>.find_element_by_xpath(color_button_xpath)
                color_button.click()

                size_select = <span className="hljs-built_in">driver</span>.find_element_by_id(<span className="hljs-string">'Option1'</span>)
                size_select.click()

                size_option = <span className="hljs-built_in">driver</span>.find_element_by_xpath(<span className="hljs-string">"//option[@value='L/XL']"</span>)
                size_text = size_option.<span className="hljs-built_in">text</span>.lower()

                not_in_stock_words = [<span className="hljs-string">'waitlist'</span>, <span className="hljs-string">'sold out'</span>]
                not_in_stock = [item <span className="hljs-keyword">for</span> item <span className="hljs-built_in">in</span> not_in_stock_words <span className="hljs-keyword">if</span> item <span className="hljs-built_in">in</span> size_text]

                <span className="hljs-keyword">if</span> <span className="hljs-built_in">not</span> not_in_stock:
                    save_screenshot(<span className="hljs-built_in">driver</span>, SCREENSHOT_NAME)
                    send_email(prepare_email(link))

            except ElementClickInterceptedException:
                save_screenshot(<span className="hljs-built_in">driver</span>, SCREENSHOT_NAME, <span className="hljs-string">'error'</span>)
                print(<span className="hljs-string">'Error - saved screenshot'</span>)

            print(<span className="hljs-string">'Success'</span>)
      </code></pre>
      <h4 id="to-add-more-links-or-stores">To Add More Links or Stores</h4>
      <ul>
        <li><p>Create a new <code>store.txt</code> file and follow the steps above to create a new method to handle it.</p>
          <ul>
            <li><p>We need separate <code>store.txt</code> files because we have to handle different websites in different ways as you saw above for Lululemon, Everlane, and Skims</p>
            </li>
            <li><p>If you want more links for a certain store, you can put them on new lines in your <code>store.txt</code> file</p>
            </li>
            <li><p>For example <code>skims.txt</code></p>
              <pre><code>https:<span className="hljs-regexp">//</span>skims.com<span className="hljs-regexp">/products/</span>cozy-knit-robe-stone
    https:<span className="hljs-regexp">//</span>skims.com<span className="hljs-regexp">/products/</span>cozy-knit-robe-bone
            </code></pre></li>
            <li><p>This line loops through each link within the text file and will email us separately for each item.</p>
              <pre><code className="lang-python"> <span className="hljs-keyword">for</span> link <span className="hljs-keyword">in</span> <span className="hljs-string">f:</span>
              </code></pre>
            </li>
          </ul>
        </li>
        <li><p>You can delete <code>everlane.txt</code>, <code>lululemon.txt</code>, <code>skims.txt</code> and their corresponding methods once you&#39;ve verified everything&#39;s working!</p>
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
        <li><p>On a <code>launchd</code> setup</p>
          <ul>
            <li>If your computer is off at the time the script is to run, it won&#39;t run until you&#39;ve started it up again. Mine has run even on sleep, but it&#39;s not always reliable</li>
          </ul>
        </li>
        <li><p>On a cron setup</p>
          <ul>
            <li>You&#39;ll need to use a <a href="https://linux.die.net/man/8/anacron">special type of cron</a> in order to mimic the run on startup functionality</li>
          </ul>
        </li>
        <li><p>If the website changes their layout, you may need to update and re-test your method in <code>back_in_stock.py</code>﻿</p>
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
        <li>Save screenshot and use <code>smtplib</code> to send the notification from our newly created email</li>
        <li>Run script everyday at indicated time via <code>launchd</code> (Mac). <em>I chose launchd so that if my computer was off at the time the script would have run, it will run on startup. You can use anacron or whatever you&#39;d like to do this on a different OS.</em></li>
      </ol>
      <h6 id="notes">Notes</h6>
      <ul>
        <li>I did this with Docker to make this easily distributable without having to get others to use a <code>virtualenv</code> with Python. I always have an annoying time with Python environment setups, so I felt it would be nice to use Docker here.<ul>
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
      <p>If you&#39;re interested, here&#39;s more context on <code>prepare_email</code>, <code>save_screenshot</code> and <code>send_email</code> methods.</p>
      <ul>
        <li><p><code>prepare_email</code> is a method that is already written for you in <code>back_in_stock.py</code> to pass to <code>send_email</code> </p>
          <ul>
            <li><p>All it needs is the link in order to work <code>prepare_email(link)</code></p>
              <pre><code className="lang-python"><span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">prepare_email</span><span className="hljs-params">(link)</span>:</span>
          <span className="hljs-comment"># Set email parameters</span>
        email_params = {}

        subject = <span className="hljs-string">"Back in Stock!"</span>

        email_params[<span className="hljs-string">'subject'</span>] = subject
        email_params[<span className="hljs-string">'body'</span>] = <span className="hljs-string">"""\
                                &lt;p&gt;%s&lt;/p&gt;
                                &lt;p&gt;Screenshot&lt;br/&gt;
                                    &lt;img src="cid:image1"&gt;
                                &lt;/p&gt;
                                """</span> % link
        email_params[<span className="hljs-string">'screenshot_name'</span>] = SCREENSHOT_NAME
        <span className="hljs-keyword">return</span> email_params
              </code></pre>
            </li>
          </ul>
        </li>
        <li><p>You can take a look at these methods within <code>helpers/web_helper_methods.py</code>, but for your curiosity, I&#39;ve added some comments to explain these methods below</p>
          <pre><code className="lang-python"><span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">save_screenshot</span><span className="hljs-params">(driver, screenshot_name, error = <span className="hljs-string">''</span>)</span>:</span>
        os.makedirs(<span className="hljs-string">"screenshots"</span>, exist_ok=<span className="hljs-keyword">True</span>) <span className="hljs-comment"># Make directory 'screenshots' in your project folder</span>
        screenshot_name = <span className="hljs-string">"screenshots/%s%s"</span> % (error, screenshot_name) <span className="hljs-comment"># Screenshot name defined as SCREENSHOT_NAME in back_in_stock.py</span>
        driver.save_screenshot(os.path.abspath(screenshot_name)) <span className="hljs-comment"># Save the screenshot in the screenshots directory</span>
          </code></pre>
          <pre><code className="lang-python">def send_email(<span className="hljs-built_in">params</span>):
           <span className="hljs-comment"># Define the to and from emails</span>
        from_email = FROM_EMAIL
        to_email = TO_EMAIL

        <span className="hljs-comment"># Set up message subject and address params</span>
        msg = MIMEMultipart(<span className="hljs-string">'related'</span>)
        msg[<span className="hljs-string">'Subject'</span>] = <span className="hljs-built_in">params</span>[<span className="hljs-string">'subject'</span>]
        msg[<span className="hljs-string">'From'</span>] = from_email
        msg[<span className="hljs-string">'To'</span>] = to_email

        <span className="hljs-comment"># Create the body of the message.</span>
        html = <span className="hljs-built_in">params</span>[<span className="hljs-string">'body'</span>]

        <span className="hljs-comment"># Get the screenshot that we just saved in save_screenshot and insert into email</span>
        screenshot_name = <span className="hljs-string">"screenshots/%s"</span> % <span className="hljs-built_in">params</span>[<span className="hljs-string">'screenshot_name'</span>]
        img_file = <span className="hljs-built_in">open</span>(os.path.abspath(screenshot_name), <span className="hljs-string">'rb'</span>)
        img = img_file.<span className="hljs-built_in">read</span>()
        msgImg = MIMEImage(img, <span className="hljs-string">'png'</span>)
        msgImg.add_header(<span className="hljs-string">'Content-ID'</span>, <span className="hljs-string">'&lt;image1&gt;'</span>)
        msgImg.add_header(<span className="hljs-string">'Content-Disposition'</span>, <span className="hljs-string">'inline'</span>, filename=screenshot_name)

        <span className="hljs-comment"># Record the MIME types (we're sending this email as an html)</span>
        msgHtml = MIMEText(html, <span className="hljs-string">'html'</span>)
        msg.attach(msgHtml)
        msg.attach(msgImg)

        <span className="hljs-comment"># Send the prepared from your FROM_EMAIL using your APP_PASSWORD</span>
        server = smtplib.SMTP_SSL(<span className="hljs-string">'smtp.gmail.com'</span>, <span className="hljs-number">465</span>)
        server.login(from_email, APP_PASSWORD)
        server.sendmail(from_email, to_email, msg.as_string())

        server.quit()
          </code></pre>
        </li>
      </ul>
      <h4 id="learning-about-docker-volumes">Learning about Docker Volumes</h4>
      <p>The first time around I did this, the <code>screenshots</code> directory wasn&#39;t saving to my local folder, and this is how I found out the issue:</p>
      <ul>
        <li><p>I knew it had something to do with using Docker, because when I originally tried this without Docker, it worked no problem. Look <a href="#learning-about-docker-volumes">here</a> to find out what the issue was and why.</p>
        </li>
        <li><p>After doing some digging, I learned about <a href="https://docs.docker.com/storage/volumes/#start-a-service-with-volumes">Docker volumes</a>. I won&#39;t go into details because I&#39;m not an expert, but I essentially needed to map my Docker container&#39;s working directory to a directory on the host (my computer) in order to create the folder and save the files to my machine</p>
          <ul>
            <li>My S.O. knows a lot more about Docker than me, and he showed me when jumping into the Docker container (I didn&#39;t know I could do this before), the folder was there</li>
          </ul>
        </li>
        <li><p>This led to adding these lines to my <code>Dockerfile</code>. I believe these tell Docker where on my local machine to map what the container is doing to.</p>
          <pre><code><span className="hljs-keyword">VOLUME</span><span className="bash"> /back_in_stock
    </span><span className="hljs-keyword">WORKDIR</span><span className="bash"> /back_in_stock</span>
        </code></pre></li>
        <li><p>And thats how I found out I need to run my program using this command:</p>
          <pre><code>docker run -v /Users/jianajavier/workspace/back<span className="hljs-number">_</span><span className="hljs-keyword">in</span><span className="hljs-number">_</span>stock:/back<span className="hljs-number">_</span><span className="hljs-keyword">in</span><span className="hljs-number">_</span>stock back<span className="hljs-number">_</span><span className="hljs-keyword">in</span><span className="hljs-number">_</span>stock
          </code></pre><ul>
            <li>This maps my local folder (<code>/Users/jianajavier/workspace/back_in_stock</code>) to the volume Docker is using <code>/back_in_stock</code></li>
            <li>This is what allows me to save the screenshots (or any file I would want to save written by my program) on my computer</li>
            <li><em>Note</em>: I put all this in <code>commands.md</code> as a reminder</li>
          </ul>
        </li>
        <li><p>You likely will not have experienced this because I already put the commands in your Dockerfile and we&#39;ve been running this command to test all along</p>
        </li>
      </ul>
      <h4 id="debugging">Debugging</h4>
      <ul>
        <li><p>In order to see if I could actually get the colour button through the code, I added a breakpoint (a point where the code stops after we run it where we can interact with the code live) by inserting <code>pdb.set_trace()</code> where you want the program to stop</p>
          <pre>
            <code className="lang-python">
              def skims(driver):
              f = open(<span className="hljs-string">"skims.txt"</span>, <span className="hljs-string">"r"</span>)

              <span className="hljs-keyword">for</span> link in f:
                  link = link.strip(<span className="hljs-string">"\\n"</span>)
                  driver.<span className="hljs-keyword">get</span>(link)

                  pdb.set_trace()
                  color_button = driver.find_element_by_xpath(<span className="hljs-string">"/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"</span>)
            </code>
          </pre>
        </li>
        <li><p>Now I run in interactive mode:</p>
          <pre><code>$ docker run -<span className="hljs-literal">it</span> -v /Users/jianajavier/workspace/back_in_stock:/back_in_stock back_in_stock

    &gt; /back_in_stock/back_in_stock.py<span className="hljs-function"><span className="hljs-params">(<span className="hljs-number">51</span>)</span><span className="hljs-title">skims</span><span className="hljs-params">()</span>
    -&gt;</span> color_button = driver.find_element_by_xpath(<span className="hljs-string">"/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"</span>)
    (Pdb)
        </code></pre></li>
        <li><p>First let&#39;s see if we can get the element. I will enter part of the line that&#39;s about to run next in the console (indicated by <code>-&gt;</code>) without the <code>color_button =</code> part (which saves the output to a variable) because I want to see the output on the screen.</p>
          <pre><code>-&gt; color_button = driver.find_element_by_xpath(<span className="hljs-string">"/html/body/main/section<span className="hljs-subst">[1]</span>/div/div/section<span className="hljs-subst">[1]</span>/div/div<span className="hljs-subst">[2]</span>/div<span className="hljs-subst">[3]</span>/div/button<span className="hljs-subst">[4]</span>/span<span className="hljs-subst">[1]</span>"</span>)
    (Pdb) driver.find_element_by_xpath(<span className="hljs-string">"/html/body/main/section<span className="hljs-subst">[1]</span>/div/div/section<span className="hljs-subst">[1]</span>/div/div<span className="hljs-subst">[2]</span>/div<span className="hljs-subst">[3]</span>/div/button<span className="hljs-subst">[4]</span>/span<span className="hljs-subst">[1]</span>"</span>)
    &lt;selenium.webdriver.remote.webelement.WebElement (session=<span className="hljs-string">"008b4713ac0bca3399cdb15ade383fa3"</span>, element=<span className="hljs-string">"d383ba17-e8c0-4ea7-abcf-01bcedb61d18"</span>)&gt;
        </code></pre></li>
        <li><p>Great, it returned a Selenium <strong>WebElement</strong>. Now I know I can find the color button on the page. I&#39;ll press <code>n</code> to execute the next line which will save the output</p>
          <pre><code>&lt;selenium<span className="hljs-selector-class">.webdriver</span><span className="hljs-selector-class">.remote</span><span className="hljs-selector-class">.webelement</span><span className="hljs-selector-class">.WebElement</span> (session=<span className="hljs-string">"008b4713ac0bca3399cdb15ade383fa3"</span>, element=<span className="hljs-string">"d383ba17-e8c0-4ea7-abcf-01bcedb61d18"</span>)&gt;
          </code></pre><p>to the variable <code>color_button</code></p>
          <pre><code><span className="hljs-function">-&gt;</span> color_button = driver.find_element_by_xpath(<span className="hljs-string">"/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"</span>)
    (Pdb) n
    &gt; /back_in_stock/back_in_stock.py<span className="hljs-function"><span className="hljs-params">(<span className="hljs-number">46</span>)</span><span className="hljs-title">skims</span><span className="hljs-params">()</span>
    -&gt;</span> <span className="hljs-keyword">for</span> link <span className="hljs-keyword">in</span> f:
    (Pdb) color_button
    &lt;selenium.webdriver.remote.webelement.WebElement (session=<span className="hljs-string">"132f274803d4e0760a994fa0ff7edcab"</span>, element=<span className="hljs-string">"76e66729-cf4f-4017-a4a9-ebc9f1aec43f"</span>)&gt;
        </code></pre></li>
        <li><p>Great! Now we want to click <code>color_button</code>. <a href="https://selenium-python.readthedocs.io/navigating.html">These</a> are all the ways I can interact with the page through Selenium. However, we&#39;ll just try to use <code>click()</code> for this purpose. Still in the debugger, let&#39;s try it.</p>
          <pre><code>(Pdb) color_button.<span className="hljs-built_in">click</span>()
        </code></pre></li>
        <li><p>You&#39;ll notice we get an error (If you don&#39;t get this error, it&#39;s okay, but you can still read on to learn how I solved for it if you&#39;d like)</p>
          <pre><code>*** selenium.common.exceptions.ElementClickInterceptedException: Message: element click intercepted: Element &lt;span <span className="hljs-built_in">class</span>=<span className="hljs-string">"config__color-inner swatch"</span> data-color=<span className="hljs-string">"STONE"</span> style=<span className="hljs-string">"background-color: rgb(194, 184, 176);"</span>&gt;&lt;/span&gt; <span className="hljs-keyword">is</span> <span className="hljs-keyword">not</span> clickable <span className="hljs-keyword">at</span> point (<span className="hljs-number">1036</span>, <span className="hljs-number">374</span>). Other element would receive <span className="hljs-keyword">the</span> click: &lt;<span className="hljs-keyword">div</span> <span className="hljs-built_in">class</span>=<span className="hljs-string">"needsclick Modal__ModalPortalStyled-sc-1oy3zf1-0 RaFgj klaviyo-form kl-private-reset-css-Xuajs1"</span> formtype=<span className="hljs-string">"POPUP"</span> overlaycolor=<span className="hljs-string">"rgba(20,20,20,0.13)"</span> modalscale=<span className="hljs-string">"1"</span>&gt;...&lt;/<span className="hljs-keyword">div</span>&gt;
      (Session info: headless chrome=<span className="hljs-number">85.0</span><span className="hljs-number">.4183</span><span className="hljs-number">.102</span>)
        </code></pre></li>
        <li><p>Hm. It says our element click was intercepted. Wonder what happened. Fortunately, we can use the <code>save_screenshot</code> method in our <code>helpers/web_helper_methods.py</code> to save a screenshot locally and see what the page looks like at this point in our program. Let&#39;s try it within the debugger.</p>
          <pre><code>(<span className="hljs-name">Pdb</span>) save_screenshot(<span className="hljs-name">driver</span>, SCREENSHOT_NAME)
        </code></pre></li>
        <li><p>Cool. Looks like it saved. This should save to a directory called <code>screenshots</code> that will be created in our working directory (<code>./back_in_stock/screenshots/</code>).<sup><a href="#cliffnote-19">19</a></sup> Let&#39;s open the screenshot and take a look.</p>
        </li>
        <li><p>When we take a look at the screenshot, we can finally see what went wrong.</p>
          <p><img src="../images/back_in_stock_tutorial/back_in_stock_screenshot_2020-09-27 copy.png" alt="popup in the way"/></p>
        </li>
        <li><p>A popup got in the way!</p>
        </li>
        <li><p>So let&#39;s add error handling and screenshot saving and re-run the program. Don&#39;t forget to import the error so we can catch it properly.</p>
        </li>
      </ul>
      <pre><code className="lang-python">  <span className="hljs-comment">#...</span>
      <span className="hljs-keyword">from</span> selenium.common.exceptions <span className="hljs-keyword">import</span> NoSuchElementException, InvalidArgumentException, ElementClickInterceptedException <span className="hljs-comment"># Added ElementClickInterceptedException to import the error</span>
      <span className="hljs-comment">#...</span>


      <span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">skims</span><span className="hljs-params">(driver)</span>:</span>
          f = open(<span className="hljs-string">"skims.txt"</span>, <span className="hljs-string">"r"</span>)

          <span className="hljs-keyword">for</span> link <span className="hljs-keyword">in</span> f:
              link = link.strip(<span className="hljs-string">"\\n"</span>)
              driver.get(link)

              <span className="hljs-keyword">try</span>:
                  color_button = driver.find_element_by_xpath(<span className="hljs-string">"/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"</span>)
                  color_button.click()
              <span className="hljs-keyword">except</span> ElementClickInterceptedException: <span className="hljs-comment"># Catching the error</span>
                  save_screenshot(driver, SCREENSHOT_NAME)
                  print(<span className="hljs-string">'Error - saved screenshot'</span>)
      </code></pre>
      <pre><code>  $ docker run -<span className="hljs-keyword">it </span>-v /Users/jianajavier/workspace/<span className="hljs-keyword">back_in_stock:/back_in_stock </span><span className="hljs-keyword">back_in_stock
    </span>  Error - saved screenshot
      </code></pre><ul>
        <li>This is similar to the Everlane website. There are a few ways to get around this, like clicking on anywhere else on the page, but I think the easiest is just to press <code>ESC</code> on the page first (like we did for Everlane)</li>
      </ul>
      <pre><code>  <span className="hljs-selector-tag">ActionChains</span>(<span className="hljs-selector-tag">driver</span>)<span className="hljs-selector-class">.send_keys</span>(<span className="hljs-selector-tag">Keys</span><span className="hljs-selector-class">.ESCAPE</span>)<span className="hljs-selector-class">.perform</span>()
      </code></pre><ul>
        <li>So now, our code for <code>skims</code> should look like this</li>
      </ul>
      <pre><code className="lang-python">  def skims(driver):
          f = open(<span className="hljs-string">"skims.txt"</span>, <span className="hljs-string">"r"</span>)

          <span className="hljs-keyword">for</span> link in f:
              link = link.strip(<span className="hljs-string">"\\n"</span>)
              driver.<span className="hljs-keyword">get</span>(link)

              color_button_xpath = <span className="hljs-string">"/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"</span>

              <span className="hljs-keyword">try</span>:
                  ActionChains(driver).send_keys(Keys.ESCAPE).perform()

                  color_button = driver.find_element_by_xpath(color_button_xpath)
                  color_button.click()
              except ElementClickInterceptedException:
                  save_screenshot(driver, SCREENSHOT_NAME)
                  print('Error - saved screenshot')

              print('Success')
      </code></pre>
      <ul>
        <li>What we did:<ul>
            <li>Put the xpath in a variable because it was looking a bit cluttered</li>
            <li>Added the <code>ESC</code> button press</li>
            <li>Added a line to print &#39;Success&#39;</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li><p>When we run it again, let&#39;s see if we get a &#39;Success&#39; message which will tell us if we have successfully clicked and selected the color button</p>
          <pre><code>$ docker run -<span className="hljs-keyword">it </span>-v /Users/jianajavier/workspace/<span className="hljs-keyword">back_in_stock:/back_in_stock </span><span className="hljs-keyword">back_in_stock
    </span><span className="hljs-symbol">Success</span>
        </code></pre></li>
        <li><p>Woot woot!</p>
        </li>
      </ul>
      <h4 id="cliffnotes">Cliffnotes</h4>
      <ol>
        <li><p id='cliffnote-1'>I don&#39;t know if this will work the exact same with Windows or Linux. I think it will because we&#39;ll be using Docker but I give no guarantees. I&#39;ll update this once I&#39;ve tested with those machines.</p></li>
        <li><p id='cliffnote-2'>If you really don&#39;t want to create a new email address, <a href="https://github.com/jianajavier/dockpylenium">you can use the creds from here.</a></p></li>
        <li><p id='cliffnote-3'>This is taking a folder I&#39;ve uploaded (onto my github) and downloading it into a folder on your computer.</p></li>
        <li><p id='cliffnote-4'>Constants are variables in the code that should not change when the code is run.</p></li>
        <li><p id='cliffnote-5'>You may have to <a href="#tweaking-back_in_stock-py-for-an-online-item-that-contains-details-in-link">tweak</a> <code>back_in_stock.py</code> to find the correct elements on the page if you change to a link that has a slightly different layout.</p></li>
        <li><p id="cliffnote-6">Docker build meaning we are make sure we have all the necessary prerequisites to run the code</p></li>
        <li><p id="cliffnote-7">Docker run to actually execute the code on the docker container (the machine that we&#39;re running our code on)</p></li>
        <li><p id="cliffnote-8">For example, on my computer, mine is: <code>/Users/jianajavier/workspace/back_in_stock/logs/</code></p></li>
        <li><p id="cliffnote-9">An alias is like a shortcut for another command</p></li>
        <li><p id="cliffnote-10">If you write another script, you can use this same command and just replace <code>back_in_stock</code> with whatever you named the <code>.plist</code> file. Example: (<code>local.cool_thing_to_do.plist</code>)</p>
          <pre><code>$ alias reload_cool_thing_to_do='launchctl unload -w /<span className="hljs-keyword">Library</span>/LaunchDaemons/$(ls /<span className="hljs-keyword">Library</span>/LaunchDaemons/ | <span className="hljs-type">grep</span> cool_thing_to_do) &amp;&amp; launchctl load -w /<span className="hljs-keyword">Library</span>/LaunchDaemons/$(ls /<span className="hljs-keyword">Library</span>/LaunchDaemons/ | <span className="hljs-type">grep</span> cool_thing_to_do)'
    $ reload_cool_thing_to_do
        </code></pre></li>
        <li><p id="cliffnote-11">If it&#39;s your first time calling this, you may get an error that says unrecognized job, but don&#39;t worry, this is because it tried to unload first and then reload, but we didn&#39;t have anything to unload at first.</p></li>
        <li><p id="cliffnote-12">Python code that begins with <code>#</code> are comments in the code and are not executed when the code is run. You don&#39;t need to add this when you&#39;re following along with the code.</p>
          <pre><code className="lang-python"><span className="hljs-comment"># This is a comment</span>
        </code></pre></li>
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
              <pre><code>$ docker run -it -v <span className="hljs-regexp">/Users/</span>jianajavier<span className="hljs-regexp">/workspace/</span><span className="hljs-string">back_in_stock:</span>/back_in_stock back_in_stock
            </code></pre></li>
          </ol>
        </li>
        <li><p id="cliffnote-18">When I say &quot;Test&quot; I am referring to running the code via the commands:</p>
          <ul>
            <li>If you are debugging (have a <code>pdb.set_trace()</code> in your code):
              <pre><code>$ docker run -it -v <span className="hljs-regexp">/Users/</span>jianajavier<span className="hljs-regexp">/workspace/</span><span className="hljs-string">back_in_stock:</span>/back_in_stock back_in_stock
              </code></pre>
            </li>
            <li>If you are not debugging:
              <pre><code>$ docker run -v <span className="hljs-regexp">/Users/</span>jianajavier<span className="hljs-regexp">/workspace/</span><span className="hljs-string">back_in_stock:</span>/back_in_stock back_in_stock
              </code></pre>
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

        code {
          background: #33322d;
          color: #dad8d8;
        }
        code,
        pre {
          font-family: Consolas, "Andale Mono", Courier, "Courier New", monospace;
        }
        pre {
          padding: 2.4rem 3.2rem 3.2rem;
          background: #e0e0e0;
          overflow-x: auto;
        }

        code {
          font-size: 1.4rem;
          margin: 0 0.2rem;
          padding: 0.4rem 0.8rem;
          white-space: nowrap;
          background: #e0e0e0;
          color: #000000;
          border-radius: 3px;
        }

        pre > code {
          display: block;
          white-space: pre;
          line-height: 2;
          padding: 0;
          margin: 0;
        }

        code.light {
          background: #e0e0e0;
          color: #000000;
          margin-bottom: 1em;
          font-size: 1em;
          align-self: center;
        }

        pre.prettyprint > code {
          border: none;
        }


    `}</style>
    </div>

  return (
    <div className="container">
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
    </div>
  )
}
