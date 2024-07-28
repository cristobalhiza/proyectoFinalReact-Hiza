export default function moveScript() {
    return {
      name: 'move-script',
      transformIndexHtml(html) {

        const scriptRegex = /<script type="module" crossorigin src="\/assets\/[^"]+\.js"><\/script>/g;
        const scriptMatches = html.match(scriptRegex);
  
        if (scriptMatches) {

          html = html.replace(scriptRegex, '');
  
          const lastScriptTag = scriptMatches[scriptMatches.length - 1];
          html = html.replace('</body>', `${lastScriptTag}</body>`);
        }
  
        return html;
      },
    };
  }
  