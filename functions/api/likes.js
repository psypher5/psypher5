// Cloudflare Pages Function: /api/likes
// Connects to Cloudflare KV (binding: LIKES_KV) for global real-time soundtrack likes

const fallbackLikes = {
  "track_0": 0,
  "track_1": 0,
  "track_2": 0,
  "track_3": 0,
  "track_4": 0,
  "track_5": 0
};

export async function onRequestGet(context) {
  const { env } = context;
  const kv = env && (env.LIKES_KV || env.KV);
  const tracks = {};

  for (let i = 0; i < 6; i++) {
    const key = `track_${i}`;
    let val = 0;
    if (kv) {
      try {
        const stored = await kv.get(key);
        if (stored !== null) {
          val = parseInt(stored, 10) || 0;
        }
      } catch (err) {
        val = fallbackLikes[key] || 0;
      }
    } else {
      val = fallbackLikes[key] || 0;
    }
    tracks[i] = val;
  }

  return new Response(JSON.stringify({ success: true, tracks }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    }
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const kv = env && (env.LIKES_KV || env.KV);
  let body = {};
  try {
    body = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  const trackId = parseInt(body.track, 10);
  if (isNaN(trackId) || trackId < 0 || trackId > 5) {
    return new Response(JSON.stringify({ error: 'Invalid track ID' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  const action = body.action === 'unlike' ? 'unlike' : 'like';
  const key = `track_${trackId}`;
  let currentCount = 0;

  if (kv) {
    try {
      const stored = await kv.get(key);
      if (stored !== null) {
        currentCount = parseInt(stored, 10) || 0;
      }
      currentCount = action === 'like' ? currentCount + 1 : Math.max(0, currentCount - 1);
      await kv.put(key, currentCount.toString());
    } catch (err) {
      currentCount = action === 'like' ? (fallbackLikes[key] || 0) + 1 : Math.max(0, (fallbackLikes[key] || 0) - 1);
      fallbackLikes[key] = currentCount;
    }
  } else {
    currentCount = action === 'like' ? (fallbackLikes[key] || 0) + 1 : Math.max(0, (fallbackLikes[key] || 0) - 1);
    fallbackLikes[key] = currentCount;
  }

  return new Response(JSON.stringify({ success: true, track: trackId, count: currentCount }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
