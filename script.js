// https://facebook.github.io/react/docs/getting-started.html

console.log(marked('# Marked'));

var TextBoxes = React.createClass({
      getInitialState: function() {
        return {
          text: ''
        }
      },
      handleChange: function(event) {
        this.setState({
          text: event.target.value
        });
        var htmltext = marked(this.state.text);
        console.log(htmltext);
        document.getElementById('preview').innerHTML = htmltext;
      },
      render: function() {
        return ( 
          <div className='container'>
            <div id='title' className=''>
              <h1> Markdown Preview
              </h1>
            </div>
            <div className='row'>
              <div className='col-sm-6'>
                <textarea className='form-control' rows='10' onChange={ this.handleChange }>
                      </textarea>
                <div id='syntax'>
                  <h3> Markdown syntax:</h3>
                  <p>
                    <div className='inline'> Heading
                      <br /> =======
                    </div>
                    <div className='inline'> Subheading
                      <br /> ----------
                    </div>
                    <div className='inline'> ### More hashtags<br/> for deeper headings
                    </div>
                  </p>
                  <p>
                    <div className='inline'> Separate paragraphs<br/> with an empty line
                    </div>
                    <div className='inline'> Leave two spaces<br/> to break a line
                    </div>
                    <div className='inline'> Link: <br/>[Link text](http: //www.url.com)
                    </div>
                  </p>
                  <p>
                    <div className='inline'> * italic *
                    </div>
                    <div className='inline'> ** bold **
                    </div>
                    <div className='inline'> `code`
                    </div>
                    <div className='inline'> ~~strikethrough~~
                    </div>
                  </p>
                  <p>
                    <div className='inline'> Bulletted list
                      <br /> * First
                      <br /> * Second
                      <br /> * Third
                      <br />
                    </div>
                    <div className='inline'> Numbered list
                      <br /> 1. First
                      <br /> 2. Second
                      <br /> 3. Third
                      <br />
                    </div>
                  </p>
                </div>
              </div>
              <div id='preview' className='col-sm-6'>
              </div>
            </div>
          </div>
          )
        }
      });

    ReactDOM.render( <
      TextBoxes / > ,
      document.getElementById('container')
    );