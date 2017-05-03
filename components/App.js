export default ({ children }) => (
  <main>
    {children}
    <style jsx global>{`
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font: 13px Helvetica, Arial; }
    #inputa { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
    #inputa input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
    #inputa button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
    #messages { list-style-type: none; margin: 0; padding: 0; }
    #messages li { padding: 5px 10px; }
    #messages li:nth-child(odd) { background: #eee; }
    .msg_body { position: absolute; height: calc(100% - 45px); width: 100%; overflow: auto;} 
    `}</style>
  </main>
)