import { getDictionary } from '@/lib/getDictionary';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const lang = request.headers.get('x-language') || 'en';
  const locales = await getDictionary(lang as any);
  const project = locales.pages.about.developerPortfolio.projects.find(
    (project: any) => project.id.toString() === params.id
  );

  if (!project) {
    return new NextResponse('Project not found', { status: 404 });
  }

  return NextResponse.json(project);
} 