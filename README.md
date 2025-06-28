# ArticleCleaner
Simple bookmarklet that activates a clean reader mode on articles by extracting and displaying the main content in a distraction-free format.
Reader Mode Activation Bookmarklet

Summary
Create a simple bookmarklet that activates a clean reader mode on articles by extracting and displaying the main content in a distraction-free format.
Description
Many websites have cluttered layouts with ads, sidebars, and navigation that make reading difficult. This bookmarklet should provide a one-click solution to transform any article into a clean, readable format similar to Safari's Reader View or Firefox's Reader Mode.
MVP Requirements
Core Functionality

Extract main article content from the current page
Remove advertisements, sidebars, navigation, and other distracting elements
Display content in a clean, readable overlay or replace page content
Preserve article text, headings, and basic formatting
Maintain paragraph structure and line breaks

Technical Specifications

Format: Single JavaScript bookmarklet (bookmark with javascript: prefix)
Size: Keep code minimal for easy copying/pasting
Compatibility: Work across major news sites and blog platforms
No Dependencies: Pure JavaScript, no external libraries

Target Content Elements
The bookmarklet should attempt to identify content using common selectors:

<article> tags
Elements with classes like: .post-content, .article-body, .entry-content
<main> elements
Fallback to largest text block if specific selectors fail

User Experience

User clicks bookmarklet while on any article page
Page transforms into clean reader view within 1-2 seconds
Provide visual feedback (loading indicator or smooth transition)
Include close/exit option to return to original page

Success Criteria

Works on at least 80% of major news websites (CNN, BBC, Medium, etc.)
Reduces visual clutter by removing ads and navigation
Maintains article readability and formatting
Code is under 500 characters for easy bookmark storage

Out of Scope (Future Enhancements)

Dark mode toggle
Font size controls
Text-to-speech integration
Saving articles offline
Complex paywall circumvention

Implementation Notes
Focus on content extraction rather than paywall bypass to avoid legal/ethical issues. The goal is improving readability of accessible content, not accessing restricted content.
Acceptance Criteria

 Bookmarklet code fits in browser bookmark
 Successfully extracts content from 5+ different news sites
 Removes visual distractions (ads, sidebars, headers)
 Preserves article formatting and images
 Provides way to exit reader mode
 Works in Chromium browsers
