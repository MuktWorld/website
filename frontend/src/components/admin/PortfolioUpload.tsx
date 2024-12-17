import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import api from '../../api/axios';
import { Service } from '../../types';

const services: Service[] = [
  'Film Making',
  'Videography',
  'Photography',
  'Graphic Design',
  'Post Production',
  'Advertisement',
  'Events',
  'Social Media Content'
];

export default function PortfolioUpload({ onUploadSuccess }: { onUploadSuccess: () => void }) {
  const [service, setService] = useState<Service>(services[0]);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type.startsWith('image/') || droppedFile.type.startsWith('video/'))) {
      setFile(droppedFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('fileUrl', file);
    formData.append('service', service);
    
    setUploading(true);
    try {
      await api.post('/portfolio/upload-portfolio', formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      onUploadSuccess();
      setFile(null);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upload Portfolio Item</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Service</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value as Service)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
        >
          {file ? (
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{file.name}</span>
              <button
                type="button"
                onClick={() => setFile(null)}
                className="text-red-500 hover:text-red-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="text-sm text-gray-600">
                Drag and drop your file here, or
                <label className="ml-1 text-indigo-600 hover:text-indigo-500 cursor-pointer">
                  browse
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={!file || uploading}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:opacity-50"
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
    </div>
  );
}
