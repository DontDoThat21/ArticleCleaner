// ArticleCleaner Bookmarklet - Clean Reader Mode
// Extract main article content and display in distraction-free format

(function() {
    'use strict';
    
    // Check if already active
    if (document.getElementById('article-cleaner-overlay')) {
        document.getElementById('article-cleaner-overlay').remove();
        return;
    }
    
    // Content extraction function
    function extractContent() {
        // Try common article selectors in order of preference
        const selectors = [
            'article',
            '[role="main"]',
            'main',
            '.post-content',
            '.article-body',
            '.entry-content',
            '.content',
            '.post',
            '.article'
        ];
        
        let content = null;
        
        // Try each selector
        for (const selector of selectors) {
            const element = document.querySelector(selector);
            if (element && element.textContent.trim().length > 200) {
                content = element;
                break;
            }
        }
        
        // Fallback: find largest text block
        if (!content) {
            const allElements = document.querySelectorAll('div, section, article');
            let maxLength = 0;
            
            for (const el of allElements) {
                const textLength = el.textContent.trim().length;
                if (textLength > maxLength && textLength > FALLBACK_THRESHOLD) {
                    maxLength = textLength;
                    content = el;
                }
            }
        }
        
        return content;
    }
    
    // Create clean reader overlay
    function createReaderView(content) {
        if (!content) {
            alert('No article content found on this page.');
            return;
        }
        
        // Clone content and clean it
        const cleanContent = content.cloneNode(true);
        
        // Remove unwanted elements
        const unwantedSelectors = [
            'script',
            'style',
            '.advertisement',
            '.ad',
            '.sidebar',
            '.nav',
            '.navigation',
            '.header',
            '.footer',
            '.social',
            '.share',
            '.related',
            '.comments'
        ];
        
        unwantedSelectors.forEach(selector => {
            const elements = cleanContent.querySelectorAll(selector);
            elements.forEach(el => el.remove());
        });
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.id = 'article-cleaner-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            z-index: 999999;
            overflow: auto;
            font-family: Georgia, serif;
            line-height: 1.6;
            padding: 20px;
            box-sizing: border-box;
        `;
        
        // Create close button
        const closeBtn = document.createElement('button');
        closeBtn.textContent = '✕ Close Reader';
        closeBtn.setAttribute('aria-label', 'Close Reader View');
        closeBtn.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #333;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            z-index: 1000000;
        `;
        closeBtn.onclick = () => overlay.remove();
        
        // Create content container
        const container = document.createElement('div');
        container.style.cssText = `
            max-width: 700px;
            margin: 60px auto 20px;
            font-size: 18px;
            color: #333;
        `;
        
        // Style headings and paragraphs
        const headings = cleanContent.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach(h => {
            h.style.cssText = 'color: #222; margin: 30px 0 15px; line-height: 1.3;';
        });
        
        const paragraphs = cleanContent.querySelectorAll('p');
        paragraphs.forEach(p => {
            p.style.cssText = 'margin: 15px 0; text-align: justify;';
        });
        
        // Style images
        const images = cleanContent.querySelectorAll('img');
        images.forEach(img => {
            img.style.cssText = 'max-width: 100%; height: auto; margin: 20px 0;';
        });
        
        container.appendChild(cleanContent);
        overlay.appendChild(closeBtn);
        overlay.appendChild(container);
        
        document.body.appendChild(overlay);
    }
    
    // Extract content and create reader view
    const articleContent = extractContent();
    createReaderView(articleContent);
    
})();