import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Submit to Web3Forms
    const formData = new FormData();
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject || 'Portfolio Contact');
    formData.append('message', message);
    formData.append('from_name', name);
    formData.append('from_email', email);

    const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const web3formsResult = await web3formsResponse.json();

    if (web3formsResult.success) {
      // Send to webhook if configured
      if (process.env.NEXT_PUBLIC_WEBHOOK_URL) {
        try {
          const webhookResponse = await fetch(process.env.NEXT_PUBLIC_WEBHOOK_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              type: 'contact_form',
              data: { name, email, subject, message },
              timestamp: new Date().toISOString()
            })
          });

          console.log('Webhook response status:', webhookResponse.status);
          
          if (!webhookResponse.ok) {
            console.error('Webhook failed:', await webhookResponse.text());
          } else {
            console.log('Webhook successful');
          }
        } catch (webhookError) {
          console.error('Webhook error:', webhookError);
          // Don't fail the whole request if webhook fails
        }
      }

      return NextResponse.json({ 
        success: true, 
        message: 'Message sent successfully' 
      });
    } else {
      return NextResponse.json(
        { success: false, message: web3formsResult.message || 'Failed to send message' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}