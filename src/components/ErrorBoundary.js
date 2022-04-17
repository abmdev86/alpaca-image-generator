import React from 'react';
import { Container , Alert} from 'react-bootstrap';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  /**
   * @param  {object} error
   */
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  /**
   * @param  {object} error
   * @param  {string} errorInfo
   */
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
   // logErrorToMyService(error, errorInfo);
   console.error(error,errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Container fluid>
          <Alert variant="danger">
            Sorry, something went wrong...
            <p className="visually-hidden">Text color is Red</p>
          </Alert>
        </Container>
      );
    }
      return this.props.children; 
  }
  
}

export default ErrorBoundary;
